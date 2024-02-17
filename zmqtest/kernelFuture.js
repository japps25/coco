// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// import {
//     DisposableDelegate
//   } from '@phosphor/disposable';

const { DisposableDelegate } = require("@phosphor/disposable");

//   import {
//     Kernel
//   } from './kernel';

//   import {
//     KernelMessage
//   } from './messages';

class KernelFutureHandler extends DisposableDelegate {
  /**
   * Construct a new KernelFutureHandler.
   */
  constructor(cb, msg, expectShell, disposeOnDone) {
    super(cb);
    this._msg = msg;
    if (!expectShell) {
      this._setFlag(KernelFutureFlag.GotReply);
    }
    this._disposeOnDone = disposeOnDone;
  }

  /**
   * Get the original outgoing message.
   */
  get msg() {
    return this._msg;
  }

  /**
   * Check for message done state.
   */
  get isDone() {
    return this._testFlag(KernelFutureFlag.IsDone);
  }

  /**
   * Get the reply handler.
   */
  get onReply() {
    return this._reply;
  }

  /**
   * Set the reply handler.
   */
  set onReply(cb) {
    this._reply = cb;
  }

  /**
   * Get the iopub handler.
   */
  get onIOPub() {
    return this._iopub;
  }

  /**
   * Set the iopub handler.
   */
  set onIOPub(cb) {
    this._iopub = cb;
  }

  /**
   * Get the done handler.
   */
  get onDone() {
    return this._done;
  }

  /**
   * Set the done handler.
   */
  set onDone(cb) {
    this._done = cb;
  }

  /**
   * Get the stdin handler.
   */
  get onStdin() {
    return this._stdin;
  }

  /**
   * Set the stdin handler.
   */
  set onStdin(cb) {
    this._stdin = cb;
  }

  /**
   * Register hook for IOPub messages.
   *
   * @param hook - The callback invoked for an IOPub message.
   *
   * #### Notes
   * The IOPub hook system allows you to preempt the handlers for IOPub messages handled
   * by the future. The most recently registered hook is run first.
   * If the hook returns false, any later hooks and the future's onIOPub handler will not run.
   * If a hook throws an error, the error is logged to the console and the next hook is run.
   * If a hook is registered during the hook processing, it won't run until the next message.
   * If a hook is removed during the hook processing, it will be deactivated immediately.
   */
  registerMessageHook(hook) {
    this._hooks.add(hook);
  }

  /**
   * Remove a hook for IOPub messages.
   *
   * @param hook - The hook to remove.
   *
   * #### Notes
   * If a hook is removed during the hook processing, it will be deactivated immediately.
   */
  removeMessageHook(hook) {
    if (this.isDisposed) {
      return;
    }
    this._hooks.remove(hook);
  }

  /**
   * Dispose and unregister the future.
   */
  dispose() {
    this._stdin = null;
    this._iopub = null;
    this._reply = null;
    this._done = null;
    this._msg = null;
    if (this._hooks) {
      this._hooks.dispose();
    }
    this._hooks = null;
    super.dispose();
  }

  /**
   * Handle an incoming kernel message.
   */
  handleMsg(msg) {
    switch (msg.channel) {
      case "shell":
        this._handleReply(msg);
        break;
      case "stdin":
        this._handleStdin(msg);
        break;
      case "iopub":
        this._handleIOPub(msg);
        break;
    }
  }

  _handleReply(msg) {
    let reply = this._reply;
    if (reply) {
      reply(msg);
    }
    this._setFlag(KernelFutureFlag.GotReply);
    if (this._testFlag(KernelFutureFlag.GotIdle)) {
      this._handleDone();
    }
  }

  _handleStdin(msg) {
    let stdin = this._stdin;
    if (stdin) {
      stdin(msg);
    }
  }

  _handleIOPub(msg) {
    let process = this._hooks.process(msg);
    let iopub = this._iopub;
    if (process && iopub) {
      iopub(msg);
    }
    if (KernelMessage.isStatusMsg(msg) && msg.content.execution_state === "idle") {
      this._setFlag(KernelFutureFlag.GotIdle);
      if (this._testFlag(KernelFutureFlag.GotReply)) {
        this._handleDone();
      }
    }
  }

  _handleDone() {
    if (this.isDone) {
      return;
    }
    this._setFlag(KernelFutureFlag.IsDone);
    let done = this._done;
    if (done) done();
    this._done = null;
    if (this._disposeOnDone) {
      this.dispose();
    }
  }

  /**
   * Test whether the given future flag is set.
   */
  _testFlag(flag) {
    return (this._status & flag) !== 0;
  }

  /**
   * Set the given future flag.
   */
  _setFlag(flag) {
    this._status |= flag;
  }

  _msg = null;
  _status = 0;
  _stdin = null;
  _iopub = null;
  _reply = null;
  _done = null;
  _hooks = new HookList();
  _disposeOnDone = true;
}

class HookList {
  /**
   * Register a hook.
   *
   * @param hook - The callback to register.
   */
  add(hook) {
    this.remove(hook);
    this._hooks.push(hook);
  }

  /**
   * Remove a hook.
   *
   * @param hook - The callback to remove.
   */
  remove(hook) {
    if (this.isDisposed) {
      return;
    }
    let index = this._hooks.indexOf(hook);
    if (index >= 0) {
      this._hooks[index] = null;
      this._scheduleCompact();
    }
  }

  /**
   * Process a message through the hooks.
   *
   * #### Notes
   * The most recently registered hook is run first.
   * If the hook returns false, any later hooks will not run.
   * If a hook throws an error, the error is logged to the console and the next hook is run.
   * If a hook is registered during the hook processing, it won't run until the next message.
   * If a hook is removed during the hook processing, it will be deactivated immediately.
   */
  process(msg) {
    let continueHandling;
    // most recently-added hook is called first
    for (let i = this._hooks.length - 1; i >= 0; i--) {
      let hook = this._hooks[i];
      if (hook === null) {
        continue;
      }
      try {
        continueHandling = hook(msg);
      } catch (err) {
        continueHandling = true;
        console.error(err);
      }
      if (continueHandling === false) {
        return false;
      }
    }
    return true;
  }

  /**
   * Test whether the HookList has been disposed.
   */
  get isDisposed() {
    return this._hooks === null;
  }

  /**
   * Dispose the hook list.
   */
  dispose() {
    this._hooks = null;
  }

  /**
   * Schedule a cleanup of the list, removing any hooks that have been nulled out.
   */
  _scheduleCompact() {
    if (!this._cleanupScheduled) {
      this._cleanupScheduled = true;
      defer(() => {
        this._cleanupScheduled = false;
        this._compact();
      });
    }
  }

  /**
   * Compact the list, removing any nulls.
   */
  _compact() {
    if (this.isDisposed) {
      return;
    }
    let numNulls = 0;
    for (let i = 0, len = this._hooks.length; i < len; i++) {
      let hook = this._hooks[i];
      if (this._hooks[i] === null) {
        numNulls++;
      } else {
        this._hooks[i - numNulls] = hook;
      }
    }
    this._hooks.length -= numNulls;
  }

  _hooks = [];
  _cleanupScheduled;
}

/**
 * Bit flags for the kernel future state.
 */
const KernelFutureFlag = {
  GotReply: 0x1,
  GotIdle: 0x2,
  IsDone: 0x4,
  DisposeOnDone: 0x8,
};

module.exports = {
  KernelFutureHandler,
};
