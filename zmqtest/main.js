// const zmq = require("zeromq");

// https://discourse.jupyter.org/t/custom-front-end-talking-to-remote-ipython-kernel-blank-response-instead-of-execute-reply/15229/2

const address = "http://localhost:8888/?token=da08be7b14615553a11c96f0708dec663a311c16202fa543";
const host = address.split("/?token=")[0];
const token = address.split("/?token=")[1];

// async function runClient() {
//   const sock = new zmq.Request();

//   sock.connect("tcp://localhost:8888");
//   console.log("Producer bound to port 8888");

//   await sock.send("4");
//   const [result] = await sock.receive();

//   console.log(result);
// }

// async function runWorker() {
//   const sock = new zmq.Push();

//   await sock.bind("tcp://localhost:8888");
//   console.log("Producer bound to port 8888");

//   while (true) {
//     await sock.send("some work");
//     await new Promise((resolve) => {
//       setTimeout(resolve, 500);
//     });
//   }
// }

// runClient();
// runWorker();

class JupyManager {
  constructor(address) {
    this.address = address;
    this.host = address.split("/?token=")[0];
    this.token = address.split("/?token=")[1];
    this.xsrfToken = "";

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
      const res = await fetch(`${this.host}${path}`, {
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
      const res = await fetch(`${this.host}${path}`, {
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
      const res = await fetch(`${this.host}${path}`, {
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
      const res = await fetch(`${this.host}${path}`, {
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
      const res = await fetch(`${this.host}/?token=${this.token}`, {
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
    return this.__post__("/api/kernels", body);
  };

  getKernel = async (kernelId) => {
    return this.__get__(`/api/kernels/${kernelId}`);
  };

  deleteKernel = async (kernelId) => {
    return this.__delete__(`/api/kernels/${kernelId}`);
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

  getMe = async () => {
    return this.__get__("/api/me");
  };

  getStatus = async () => {
    return this.__get__("/api/status");
  };
}

global.jupyManager = new JupyManager(address);
