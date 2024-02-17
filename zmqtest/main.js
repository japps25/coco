// https://discourse.jupyter.org/t/custom-front-end-talking-to-remote-ipython-kernel-blank-response-instead-of-execute-reply/15229/2

const address = "http://localhost:8888/?token=dd7c708383c3433c2116dbe84787c801d3d5e51e44a859ca";

const Kernel = require("./kernel.js");

class JupyManager {
  constructor(address) {
    this.address = address;
    this.baseUrl = address.split("/?token=")[0];
    this.token = address.split("/?token=")[1];
    this.xsrfToken = "";

    this.kernels = [];

    this.connect();
  }

  __getDefaultHeaders__ = () => {
    return {
      "Access-Control-Allow-Origin": "*",
      "X-XSRFToken": this.xsrfToken,
      "Content-Type": "application/json",
      Authorization: `token ${this.token}`,
      Connection: "keep-alive",
    };
  };

  __get__ = async (path) => {
    try {
      const res = await fetch(`${this.baseUrl}${path}`, {
        method: "GET",
        headers: this.__getDefaultHeaders__(),
      });

      if (!res.ok) {
        throw new Error(`${path}: GET request failed with status ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };

  __post__ = async (path, body) => {
    try {
      const res = await fetch(`${this.baseUrl}${path}`, {
        method: "POST",
        headers: this.__getDefaultHeaders__(),
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`${path}: POST request failed with status ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };

  __patch__ = async (path, body) => {
    try {
      const res = await fetch(`${this.baseUrl}${path}`, {
        method: "PATCH",
        headers: this.__getDefaultHeaders__(),
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`${path}: PATCH request failed with status ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };

  __delete__ = async (path) => {
    try {
      const res = await fetch(`${this.baseUrl}${path}`, {
        method: "DELETE",
        headers: this.__getDefaultHeaders__(),
      });

      if (!res.ok) {
        throw new Error(`${path}: DELETE request failed with status ${res.status}`);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  connect = async () => {
    try {
      const res = await fetch(`${this.baseUrl}/?token=${this.token}`, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Connection: "keep-alive",
        },
      });

      if (res.status === 200) {
        let cookie = res.headers.get("set-cookie");
        this.xsrfToken = /_xsrf=(.*?);/.exec(cookie)[1];
        console.log("Connection successful");
        // console.debug("XSRF Token: ", this.xsrfToken);
      } else {
        throw new Error("Connection failed");
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  getApi = async () => {
    return this.__get__("/api");
  };

  listSessions = async () => {
    return this.__get__("/api/sessions");
  };

  addSession = async (body) => {
    return this.__post__("/api/sessions", body);
  };

  getSession = async (sessionId) => {
    return this.__get__(`/api/sessions/${sessionId}`);
  };

  updateSession = async (sessionId, body) => {
    return this.__patch__(`/api/sessions/${sessionId}`, body);
  };

  deleteSession = async (sessionId) => {
    return this.__delete__(`/api/sessions/${sessionId}`);
  };

  listKernels = async () => {
    return this.__get__("/api/kernels");
  };

  addKernel = async (body) => {
    const kernel = await this.__post__("/api/kernels", body);
    this.kernels.push(new Kernel({ baseUrl: this.baseUrl, token: this.token }, kernel.id));
    return kernel;
  };

  getKernel = async (kernelId) => {
    let kernel = this.kernels.find((kernel) => kernel.kernelId === kernelId);
    if (kernel) {
      return kernel;
    }

    kernel = await this.__get__(`/api/kernels/${kernelId}`);
    this.kernels.push(new Kernel(kernel.id, kernel.name, kernel.execution_state));
    return kernel;
  };

  deleteKernel = async (kernelId) => {
    this.__delete__(`/api/kernels/${kernelId}`);
    this.kernels = this.kernels.filter((kernel) => kernel.kernelId !== kernelId);
  };

  interruptKernel = async (kernelId) => {
    return this.__post__(`/api/kernels/${kernelId}/interrupt`);
  };

  restartKernel = async (kernelId) => {
    return this.__post__(`/api/kernels/${kernelId}/restart`);
  };

  getKernelSpecs = async () => {
    return this.__get__("/api/kernelspecs");
  };

  listTerminals = async () => {
    return this.__get__("/api/terminals");
  };

  addTerminal = async () => {
    return this.__post__("/api/terminals");
  };

  getTerminal = async (terminalId) => {
    return this.__get__(`/api/terminals/${terminalId}`);
  };

  updateTerminal = async (terminalId, body) => {
    return this.__patch__(`/api/terminals/${terminalId}`, body);
  };

  deleteTerminal = async (terminalId) => {
    return this.__delete__(`/api/terminals/${terminalId}`);
  };

  getConfig = async (section) => {
    return this.__get__(`/api/config/${section}`);
  };

  getMe = async () => {
    return this.__get__("/api/me");
  };

  getStatus = async () => {
    return this.__get__("/api/status");
  };
}

// import { KernelMessage, Kernel } from "@jupyterlab/services";

// const Kernel = require("@jupyterlab/services").Kernel;
// const KernelMessage = require("@jupyterlab/services").KernelMessage;

// The base url of the notebook server.
// const BASE_URL = "http://localhost:8888";

// Get a list of available kernels and connect to one.
// Kernel.listRunning({ baseUrl: BASE_URL }).then((kernelModels) => {
//   let options = {
//     baseUrl: BASE_URL,
//     name: kernelModels[0].name,
//   };
//   Kernel.connectTo(kernelModels[0].id, options).then((kernel) => {
//     console.log(kernel.name);
//   });
// });

// // Get info about the available kernels and start a new one.
// Kernel.getSpecs({ baseUrl: BASE_URL }).then((kernelSpecs) => {
//   console.log("Default spec:", kernelSpecs.default);
//   console.log("Available specs", Object.keys(kernelSpecs.kernelspecs));
//   // use the default name
//   let options = {
//     baseUrl: BASE_URL,
//     name: kernelSpecs.default,
//   };
//   Kernel.startNew(options).then((kernel) => {
//     // Execute and handle replies.
//     let future = kernel.requestExecute({ code: "a = 1" });
//     future.onDone = () => {
//       console.log("Future is fulfilled");
//     };
//     future.onIOPub = (msg) => {
//       console.log(msg.content); // Print rich output data.
//     };

//     // Restart the kernel and then send an inspect message.
//     kernel.restart().then(() => {
//       let request = {
//         code: "hello",
//         cursor_pos: 4,
//         detail_level: 0,
//       };
//       kernel.requestInspect(request).then((reply) => {
//         console.log(reply.content.data);
//       });
//     });

//     // Interrupt the kernel and then send a complete message.
//     kernel.interrupt().then(() => {
//       kernel.requestComplete({ code: "impor", cursor_pos: 4 }).then((reply) => {
//         console.log(reply.content.matches);
//       });
//     });

//     // Register a callback for when the kernel changes state.
//     kernel.statusChanged.connect((status) => {
//       console.log("status", status);
//     });

//     // Kill the kernel.
//     kernel.shutdown().then(() => {
//       console.log("Kernel shut down");
//     });
//   });
// });

global.jupyManager = new JupyManager(address);

// const { Kernel } = require("@jupyterlab/services");

// // Define the URL of the Jupyter server
// const serverSettings = {
//   baseUrl: "http://localhost:8888", // Replace with your Jupyter server URL
//   token: "fa5b5fbb7cec37109f2fe8f9ec53f43e287f6fe22aa82301", // Replace with your Jupyter server token
// };

// Define the ID of the kernel you want to connect to
// const kernelId = "cc6a1237-d5a4-4c19-9fe5-fdcee8bf981b"; // Replace with your kernel ID

// Connect to the kernel
// Kernel.connectTo(kernelId, serverSettings).then((kernel) => {
//   // Use the kernel to execute code
//   const code = 'print("Hello, World!")';
//   kernel.requestExecute({ code: code }).then((reply) => {
//     console.log(reply);
//   });
// });
