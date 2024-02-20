exports = {
  hello: () => {
    return "this is a secret message from the proxy module";
  },
  JupyterManager: import("./jupyterManager"),
};
