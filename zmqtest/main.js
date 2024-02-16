// const zmq = require("zeromq");

// https://discourse.jupyter.org/t/custom-front-end-talking-to-remote-ipython-kernel-blank-response-instead-of-execute-reply/15229/2

const address = "http://localhost:8888/?token=122d3e15eb597d308473bdb71c21837595a4a501a879ef31";
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

  getDefaultHeaders = () => {
    return {
      "Access-Control-Allow-Origin": "*",
      "X-XSRFToken": this.xsrfToken,
      "Content-Type": "application/json",
      Authorization: `token ${this.token}`,
      Connection: "keep-alive",
    };
  };

  __doGet = async (path) => {
    try {
      const res = await fetch(`${this.host}${path}`, {
        method: "GET",
        headers: this.getDefaultHeaders(),
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

  __doPost = async (path, body) => {
    try {
      const res = await fetch(`${this.host}${path}`, {
        method: "POST",
        headers: this.getDefaultHeaders(),
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

  __doDelete = async (path) => {
    try {
      const res = await fetch(`${this.host}${path}`, {
        method: "DELETE",
        headers: this.getDefaultHeaders(),
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

  api = async () => {
    return this.__doGet("/api");
  };

  listSessions = async () => {
    return this.__doGet("/api/sessions");
  };

  postSession = async (body) => {
    return this.__doPost("/api/sessions", body);
  };

  listKernels = async () => {
    return this.__doGet("/api/kernels");
  };

  postKernel = async (body) => {
    return this.__doPost("/api/kernels", body);
  };

  deleteKernel = async (kernelId) => {
    return this.__doDelete(`/api/kernels/${kernelId}`);
  };
}

global.jupyManager = new JupyManager(address);
