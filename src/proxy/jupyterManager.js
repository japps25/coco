const Kernel = import("./kernel.js");

class JupyterManager {
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
    const kernelInfo = await this.__post__("/api/kernels", body);
    const kernel = new Kernel({ baseUrl: this.baseUrl, token: this.token }, kernelInfo.id);
    this.kernels.push(kernel);

    return kernel;
  };

  getKernel = async (kernelId) => {
    let kernel = this.kernels.find((kernel) => kernel.id === kernelId);
    if (kernel) {
      return kernel;
    }

    const res = await this.__get__(`/api/kernels/${kernelId}`);
    kernel = new Kernel({ baseUrl: this.baseUrl, token: this.token }, res.id);
    this.kernels.push(kernel);
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

module.exports = JupyterManager;
