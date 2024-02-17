const JupyterServices = require("@jupyterlab/services");

const utils = require("./utils");

/**
 * The url for the kernel service.
 */
const KERNEL_SERVICE_URL = "api/kernels";

/**
 * The url for the kernelspec service.
 */
const KERNELSPEC_SERVICE_URL = "api/kernelspecs";

/**
 * Implementation of the Kernel object
 */
class Kernel {
  /**
   * Construct a kernel object.
   */
  constructor(options, id) {
    this._name = options.name;
    this._id = id;
    this._baseUrl = options.baseUrl || utils.getBaseUrl();
    this._wsUrl = options.wsUrl || utils.getWsUrl(this._baseUrl);
    this._ajaxSettings = JSON.stringify(utils.ajaxSettingsWithToken(options.ajaxSettings, options.token));
    this._token = options.token || utils.getConfigOption("token");
    this._clientId = options.clientId || utils.uuid();
    this._username = options.username || "";
    this._futures = new Map();
    this._commPromises = new Map();
    this._comms = new Map();
    this._createSocket();
    this.terminated = new Signal(this);

    Private.runningKernels.push(this);
  }

  /**
   * A signal emitted when the kernel status changes.
   */
  get statusChanged() {
    return this._statusChanged;
  }

  /**
   * A signal emitted for iopub kernel messages.
   */
  get iopubMessage() {
    return this._iopubMessage;
  }

  /**
   * A signal emitted for unhandled kernel message.
   */
  get unhandledMessage() {
    return this._unhandledMessage;
  }

  /**
   * The id of the server-side kernel.
   */
  get id() {
    return this._id;
  }

  /**
   * The name of the server-side kernel.
   */
  get name() {
    return this._name;
  }

  /**
   * Get the model associated with the kernel.
   */
  get model() {
    return { name: this.name, id: this.id };
  }

  /**
   * The client username.
   */
  get username() {
    return this._username;
  }

  /**
   * The client unique id.
   */
  get clientId() {
    return this._clientId;
  }

  /**
   * The current status of the kernel.
   */
  get status() {
    return this._status;
  }

  /**
   * The base url of the kernel.
   */
  get baseUrl() {
    return this._baseUrl;
  }

  /**
   * Get a copy of the default ajax settings for the kernel.
   */
  get ajaxSettings() {
    return JSON.parse(this._ajaxSettings);
  }
  /**
   * Set the default ajax settings for the kernel.
   */
  set ajaxSettings(value) {
    this._ajaxSettings = JSON.stringify(value);
  }

  /**
   * Test whether the kernel has been disposed.
   */
  get isDisposed() {
    return this._futures === null;
  }

  /**
   * The cached kernel info.
   *
   * #### Notes
   * This value will be null until the kernel is ready.
   */
  get info() {
    return this._info;
  }

  /**
   * Test whether the kernel is ready.
   */
  get isReady() {
    return this._isReady;
  }

  /**
   * A promise that is fulfilled when the kernel is ready.
   */
  get ready() {
    return this._connectionPromise.promise;
  }

  /**
   * Get the kernel spec.
   *
   * @returns A promise that resolves with the kernel spec.
   */
  getSpec() {
    if (this._specPromise) {
      return this._specPromise;
    }
    let options = {
      baseUrl: this._baseUrl,
      ajaxSettings: this.ajaxSettings,
    };
    this._specPromise = Private.findSpecs(options).then((specs) => {
      return specs.kernelspecs[this._name];
    });
    return this._specPromise;
  }

  /**
   * Clone the current kernel with a new clientId.
   */
  clone() {
    let options = {
      baseUrl: this._baseUrl,
      wsUrl: this._wsUrl,
      name: this._name,
      username: this._username,
      token: this._token,
      ajaxSettings: this.ajaxSettings,
    };
    return new Kernel(options, this._id);
  }

  /**
   * Dispose of the resources held by the kernel.
   */
  dispose() {
    if (this.isDisposed) {
      return;
    }
    this._status = "dead";
    if (this._ws !== null) {
      this._ws.close();
    }
    this._ws = null;
    this._futures.forEach((future, key) => {
      future.dispose();
    });
    this._comms.forEach((comm, key) => {
      comm.dispose();
    });
    this._futures = null;
    this._commPromises = null;
    this._comms = null;
    this._targetRegistry = null;
    ArrayExt.removeFirstOf(Private.runningKernels, this);
    Signal.clearData(this);
  }

  /**
   * Send a shell message to the kernel.
   *
   * #### Notes
   * Send a message to the kernel's shell channel, yielding a future object
   * for accepting replies.
   *
   * If `expectReply` is given and `true`, the future is disposed when both a
   * shell reply and an idle status message are received. If `expectReply`
   * is not given or is `false`, the future is resolved when an idle status
   * message is received.
   * If `disposeOnDone` is not given or is `true`, the Future is disposed at this point.
   * If `disposeOnDone` is given and `false`, it is up to the caller to dispose of the Future.
   *
   * All replies are validated as valid kernel messages.
   *
   * If the kernel status is `dead`, this will throw an error.
   */
  sendShellMessage(msg, expectReply = false, disposeOnDone = true) {
    if (this.status === "dead") {
      throw new Error("Kernel is dead");
    }
    if (!this._isReady) {
      this._pendingMessages.push(msg);
    } else {
      this._ws.send(serialize.serialize(msg));
    }
    let future = new KernelFutureHandler(
      () => {
        this._futures.delete(msg.header.msg_id);
      },
      msg,
      expectReply,
      disposeOnDone
    );
    this._futures.set(msg.header.msg_id, future);
    return future;
  }

  /**
   * Interrupt a kernel.
   *
   * #### Notes
   * Uses the [Jupyter Notebook API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter/notebook/master/notebook/services/api/api.yaml#!/kernels).
   *
   * The promise is fulfilled on a valid response and rejected otherwise.
   *
   * It is assumed that the API call does not mutate the kernel id or name.
   *
   * The promise will be rejected if the kernel status is `Dead` or if the
   * request fails or the response is invalid.
   */
  interrupt() {
    return Private.interruptKernel(this, this._baseUrl, this.ajaxSettings);
  }

  /**
   * Restart a kernel.
   *
   * #### Notes
   * Uses the [Jupyter Notebook API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter/notebook/master/notebook/services/api/api.yaml#!/kernels) and validates the response model.
   *
   * Any existing Future or Comm objects are cleared.
   *
   * The promise is fulfilled on a valid response and rejected otherwise.
   *
   * It is assumed that the API call does not mutate the kernel id or name.
   *
   * The promise will be rejected if the request fails or the response is
   * invalid.
   */
  restart() {
    this._clearState();
    this._updateStatus("restarting");
    return Private.restartKernel(this, this._baseUrl, this.ajaxSettings);
  }

  /**
   * Reconnect to a disconnected kernel.
   *
   * #### Notes
   * Used when the websocket connection to the kernel is lost.
   */
  reconnect() {
    this._isReady = false;
    if (this._ws !== null) {
      // Clear the websocket event handlers and the socket itself.
      this._ws.onopen = null;
      this._ws.onclose = null;
      this._ws.onerror = null;
      this._ws.onmessage = null;
      this._ws.close();
      this._ws = null;
    }
    this._updateStatus("reconnecting");
    this._createSocket();
    return this._connectionPromise.promise;
  }

  /**
   * Shutdown a kernel.
   *
   * #### Notes
   * Uses the [Jupyter Notebook API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter/notebook/master/notebook/services/api/api.yaml#!/kernels).
   *
   * The promise is fulfilled on a valid response and rejected otherwise.
   *
   * On a valid response, closes the websocket and disposes of the kernel
   * object, and fulfills the promise.
   *
   * The promise will be rejected if the kernel status is `Dead` or if the
   * request fails or the response is invalid.
   */
  shutdown() {
    if (this.status === "dead") {
      return Promise.reject(new Error("Kernel is dead"));
    }
    this._clearState();
    return Private.shutdownKernel(this.id, this._baseUrl, this.ajaxSettings);
  }

  /**
   * Send a `kernel_info_request` message.
   *
   * #### Notes
   * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#kernel-info).
   *
   * Fulfills with the `kernel_info_response` content when the shell reply is
   * received and validated.
   */
  requestKernelInfo() {
    let options = {
      msgType: "kernel_info_request",
      channel: "shell",
      username: this._username,
      session: this._clientId,
    };
    let msg = JupyterServices.KernelMessage.createShellMessage(options);
    return Private.handleShellMessage(this, msg).then((reply) => {
      this._info = reply.content;
      return reply;
    });
  }

  /**
   * Send a `complete_request` message.
   *
   * #### Notes
   * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#completion).
   *
   * Fulfills with the `complete_reply` content when the shell reply is
   * received and validated.
   */
  requestComplete(content) {
    let options = {
      msgType: "complete_request",
      channel: "shell",
      username: this._username,
      session: this._clientId,
    };
    let msg = JupyterServices.KernelMessage.createShellMessage(options, content);
    return Private.handleShellMessage(this, msg);
  }

  /**
   * Send an `inspect_request` message.
   *
   * #### Notes
   * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#introspection).
   *
   * Fulfills with the `inspect_reply` content when the shell reply is
   * received and validated.
   */
  requestInspect(content) {
    let options = {
      msgType: "inspect_request",
      channel: "shell",
      username: this._username,
      session: this._clientId,
    };
    let msg = JupyterServices.KernelMessage.createShellMessage(options, content);
    return Private.handleShellMessage(this, msg);
  }

  /**
   * Send a `history_request` message.
   *
   * #### Notes
   * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#history).
   *
   * Fulfills with the `history_reply` content when the shell reply is
   * received and validated.
   */
  requestHistory(content) {
    let options = {
      msgType: "history_request",
      channel: "shell",
      username: this._username,
      session: this._clientId,
    };
    let msg = JupyterServices.KernelMessage.createShellMessage(options, content);
    return Private.handleShellMessage(this, msg);
  }

  /**
   * Send an `execute_request` message.
   *
   * #### Notes
   * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#execute).
   *
   * Future `onReply` is called with the `execute_reply` content when the
   * shell reply is received and validated. The future will resolve when
   * this message is received and the `idle` iopub status is received.
   * The future will also be disposed at this point unless `disposeOnDone`
   * is specified and `false`, in which case it is up to the caller to dispose
   * of the future.
   *
   * **See also:** [[IExecuteReply]]
   */
  requestExecute(content, disposeOnDone = true) {
    let options = {
      msgType: "execute_request",
      channel: "shell",
      username: this._username,
      session: this._clientId,
    };
    let defaults = {
      silent: false,
      store_history: true,
      user_expressions: {},
      allow_stdin: true,
      stop_on_error: false,
    };
    content = utils.extend(defaults, content);
    let msg = JupyterServices.KernelMessage.createShellMessage(options, content);
    return this.sendShellMessage(msg, true, disposeOnDone);
  }

  /**
   * Send an `is_complete_request` message.
   *
   * #### Notes
   * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#code-completeness).
   *
   * Fulfills with the `is_complete_response` content when the shell reply is
   * received and validated.
   */
  requestIsComplete(content) {
    let options = {
      msgType: "is_complete_request",
      channel: "shell",
      username: this._username,
      session: this._clientId,
    };
    let msg = JupyterServices.KernelMessage.createShellMessage(options, content);
    return Private.handleShellMessage(this, msg);
  }

  /**
   * Send a `comm_info_request` message.
   *
   * #### Notes
   * Fulfills with the `comm_info_reply` content when the shell reply is
   * received and validated.
   */
  requestCommInfo(content) {
    let options = {
      msgType: "comm_info_request",
      channel: "shell",
      username: this._username,
      session: this._clientId,
    };
    let msg = JupyterServices.KernelMessage.createShellMessage(options, content);
    return Private.handleShellMessage(this, msg);
  }

  /**
   * Send an `input_reply` message.
   *
   * #### Notes
   * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#messages-on-the-stdin-router-dealer-sockets).
   */
  sendInputReply(content) {
    if (this.status === "dead") {
      throw new Error("Kernel is dead");
    }
    let options = {
      msgType: "input_reply",
      channel: "stdin",
      username: this._username,
      session: this._clientId,
    };
    let msg = JupyterServices.KernelMessage.createMessage(options, content);
    if (!this._isReady) {
      this._pendingMessages.push(msg);
    } else {
      this._ws.send(serialize.serialize(msg));
    }
  }

  /**
   * Register an IOPub message hook.
   *
   * @param msg_id - The parent_header message id the hook will intercept.
   *
   * @param hook - The callback invoked for the message.
   *
   * @returns A disposable used to unregister the message hook.
   *
   * #### Notes
   * The IOPub hook system allows you to preempt the handlers for IOPub messages with a
   * given parent_header message id. The most recently registered hook is run first.
   * If the hook returns false, any later hooks and the future's onIOPub handler will not run.
   * If a hook throws an error, the error is logged to the console and the next hook is run.
   * If a hook is registered during the hook processing, it won't run until the next message.
   * If a hook is disposed during the hook processing, it will be deactivated immediately.
   *
   * See also [[IFuture.registerMessageHook]].
   */
  registerMessageHook(msgId, hook) {
    let future = this._futures && this._futures.get(msgId);
    if (future) {
      future.registerMessageHook(hook);
    }
    return new DisposableDelegate(() => {
      future = this._futures && this._futures.get(msgId);
      if (future) {
        future.removeMessageHook(hook);
      }
    });
  }

  /**
   * Register a comm target handler.
   *
   * @param targetName - The name of the comm target.
   *
   * @param callback - The callback invoked for a comm open message.
   *
   * @returns A disposable used to unregister the comm target.
   *
   * #### Notes
   * Only one comm target can be registered at a time, an existing
   * callback will be overidden.  A registered comm target handler will take
   * precedence over a comm which specifies a `target_module`.
   */
  registerCommTarget(targetName, callback) {
    this._targetRegistry[targetName] = callback;
    return new DisposableDelegate(() => {
      if (!this.isDisposed) {
        delete this._targetRegistry[targetName];
      }
    });
  }

  /**
   * Connect to a comm, or create a new one.
   *
   * #### Notes
   * If a client-side comm already exists, it is returned.
   */
  connectToComm(targetName, commId) {
    if (commId === void 0) {
      commId = utils.uuid();
    }
    let comm = this._comms.get(commId);
    if (!comm) {
      comm = new CommHandler(targetName, commId, this, () => {
        this._unregisterComm(commId);
      });
      this._comms.set(commId, comm);
    }
    return comm;
  }

  /**
   * Create the kernel websocket connection and add socket status handlers.
   */
  _createSocket() {
    let partialUrl = utils.urlPathJoin(this._wsUrl, KERNEL_SERVICE_URL, encodeURIComponent(this._id));
    // Strip any authentication from the display string.
    let parsed = utils.urlParse(partialUrl);
    console.log("Starting websocket", parsed.hostname);

    let url = utils.urlPathJoin(partialUrl, "channels?session_id=" + encodeURIComponent(this._clientId));
    // if token authentication is in use
    if (this._token !== "") {
      url = url + `&token=${encodeURIComponent(this._token)}`;
    }

    this._connectionPromise = new PromiseDelegate();
    this._ws = new WebSocket(url);

    // Ensure incoming binary messages are not Blobs
    this._ws.binaryType = "arraybuffer";

    this._ws.onmessage = (evt) => {
      this._onWSMessage(evt);
    };
    this._ws.onopen = (evt) => {
      this._onWSOpen(evt);
    };
    this._ws.onclose = (evt) => {
      this._onWSClose(evt);
    };
    this._ws.onerror = (evt) => {
      this._onWSClose(evt);
    };
  }

  /**
   * Handle a websocket open event.
   */
  _onWSOpen(evt) {
    this._reconnectAttempt = 0;
    // Allow the message to get through.
    this._isReady = true;
    // Get the kernel info, signaling that the kernel is ready.
    this.requestKernelInfo()
      .then(() => {
        this._connectionPromise.resolve(void 0);
      })
      .catch((err) => {
        this._connectionPromise.reject(err);
      });
    this._isReady = false;
  }

  /**
   * Handle a websocket message, validating and routing appropriately.
   */
  _onWSMessage(evt) {
    if (this.status === "dead") {
      // If the socket is being closed, ignore any messages
      return;
    }
    let msg = serialize.deserialize(evt.data);
    try {
      validate.validateMessage(msg);
    } catch (error) {
      console.error(`Invalid message: ${error.message}`);
      return;
    }
    if (msg.parent_header) {
      let parentHeader = msg.parent_header;
      let future = this._futures && this._futures.get(parentHeader.msg_id);
      if (future) {
        future.handleMsg(msg);
      } else {
        // If the message was sent by us and was not iopub, it is orphaned.
        let owned = parentHeader.session === this.clientId;
        if (msg.channel !== "iopub" && owned) {
          this._unhandledMessage.emit(msg);
        }
      }
    }
    if (msg.channel === "iopub") {
      switch (msg.header.msg_type) {
        case "status":
          this._updateStatus(msg.content.execution_state);
          break;
        case "comm_open":
          this._handleCommOpen(msg);
          break;
        case "comm_msg":
          this._handleCommMsg(msg);
          break;
        case "comm_close":
          this._handleCommClose(msg);
          break;
        default:
          break;
      }
      this._iopubMessage.emit(msg);
    }
  }

  /**
   * Handle a websocket close event.
   */
  _onWSClose(evt) {
    if (this.status === "dead") {
      return;
    }
    // Clear the websocket event handlers and the socket itself.
    this._ws.onclose = null;
    this._ws.onerror = null;
    this._ws = null;

    if (this._reconnectAttempt < this._reconnectLimit) {
      this._updateStatus("reconnecting");
      let timeout = Math.pow(2, this._reconnectAttempt);
      console.error("Connection lost, reconnecting in " + timeout + " seconds.");
      setTimeout(this._createSocket.bind(this), 1e3 * timeout);
      this._reconnectAttempt += 1;
    } else {
      this._updateStatus("dead");
      this._connectionPromise.reject(new Error("Could not establish connection"));
    }
  }

  /**
   * Handle status iopub messages from the kernel.
   */
  _updateStatus(status) {
    switch (status) {
      case "starting":
      case "idle":
      case "busy":
        this._isReady = true;
        break;
      case "restarting":
      case "reconnecting":
      case "dead":
        this._isReady = false;
        break;
      default:
        console.error("invalid kernel status:", status);
        return;
    }
    if (status !== this._status) {
      this._status = status;
      Private.logKernelStatus(this);
      this._statusChanged.emit(status);
      if (status === "dead") {
        this.dispose();
      }
    }
    if (this._isReady) {
      this._sendPending();
    }
  }

  /**
   * Send pending messages to the kernel.
   */
  _sendPending() {
    // We shift the message off the queue
    // after the message is sent so that if there is an exception,
    // the message is still pending.
    while (this._pendingMessages.length > 0) {
      let msg = serialize.serialize(this._pendingMessages[0]);
      this._ws.send(msg);
      this._pendingMessages.shift();
    }
  }

  /**
   * Clear the internal state.
   */
  _clearState() {
    this._isReady = false;
    this._pendingMessages = [];
    this._futures.forEach((future, key) => {
      future.dispose();
    });
    this._comms.forEach((comm, key) => {
      comm.dispose();
    });
    this._futures = new Map();
    this._commPromises = new Map();
    this._comms = new Map();
  }

  /**
   * Handle a `comm_open` kernel message.
   */
  _handleCommOpen(msg) {
    let content = msg.content;
    let promise = utils.loadObject(content.target_name, content.target_module, this._targetRegistry).then((target) => {
      let comm = new CommHandler(content.target_name, content.comm_id, this, () => {
        this._unregisterComm(content.comm_id);
      });
      let response;
      try {
        response = target(comm, msg);
      } catch (e) {
        comm.close();
        console.error("Exception opening new comm");
        throw e;
      }
      return Promise.resolve(response).then(() => {
        this._commPromises.delete(comm.commId);
        this._comms.set(comm.commId, comm);
        return comm;
      });
    });
    this._commPromises.set(content.comm_id, promise);
  }

  /**
   * Handle 'comm_close' kernel message.
   */
  _handleCommClose(msg) {
    let content = msg.content;
    let promise = this._commPromises.get(content.comm_id);
    if (!promise) {
      let comm = this._comms.get(content.comm_id);
      if (!comm) {
        console.error("Comm not found for comm id " + content.comm_id);
        return;
      }
      promise = Promise.resolve(comm);
    }
    promise.then((comm) => {
      this._unregisterComm(comm.commId);
      try {
        let onClose = comm.onClose;
        if (onClose) {
          onClose(msg);
        }
        comm.dispose();
      } catch (e) {
        console.error("Exception closing comm: ", e, e.stack, msg);
      }
    });
  }

  /**
   * Handle a 'comm_msg' kernel message.
   */
  _handleCommMsg(msg) {
    let content = msg.content;
    let promise = this._commPromises.get(content.comm_id);
    if (!promise) {
      let comm = this._comms.get(content.comm_id);
      if (!comm) {
        // We do have a registered comm for this comm id, ignore.
        return;
      } else {
        let onMsg = comm.onMsg;
        if (onMsg) {
          onMsg(msg);
        }
      }
    } else {
      promise.then((comm) => {
        try {
          let onMsg = comm.onMsg;
          if (onMsg) {
            onMsg(msg);
          }
        } catch (e) {
          console.error("Exception handling comm msg: ", e, e.stack, msg);
        }
        return comm;
      });
    }
  }

  /**
   * Unregister a comm instance.
   */
  _unregisterComm(commId) {
    this._comms.delete(commId);
    this._commPromises.delete(commId);
  }

  _id = "";
  _token = "";
  _name = "";
  _baseUrl = "";
  _wsUrl = "";
  _status = "unknown";
  _clientId = "";
  _ws = null;
  _username = "";
  _ajaxSettings = "{}";
  _reconnectLimit = 7;
  _reconnectAttempt = 0;
  _isReady = false;
  _futures = null;
  _commPromises = null;
  _comms = null;
  _targetRegistry = Object.create(null);
  _info = null;
  _pendingMessages = [];
  _connectionPromise = null;
  _specPromise = null;
  _statusChanged = new Signal(this);
  _iopubMessage = new Signal(this);
  _unhandledMessage = new Signal(this);
}

module.exports = Kernel;
