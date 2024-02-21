import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

import { KernelManager } from "../proxy/manager";

const url = "http://localhost:8888/?token=be4e669fd6353de730e828a236a5b3046b3fcc0cdc38c75f";
const baseUrl = "http://localhost:8888";
const token = url.split("token=")[1];

const kernelManager = new KernelManager({ baseUrl: baseUrl, token: token });
kernelManager
  .startNew({ name: "python3" })
  .then((kernel) => {
    console.log("Kernel started", kernel);
  })
  .catch((error) => {
    console.error("Failed to start kernel", error);
  });

// Custom APIs for renderer
const api = {
  kernelManager: kernelManager,
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
