import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

import { KernelManager } from "../proxy/manager";
import { Kernel } from "../proxy/kernel";
import { DefaultKernel } from "../proxy/default";

class CocoServerApi {
  kernelManager: KernelManager | null;
  currentKernel: DefaultKernel | null;
  currentKernelId: string | null;
  pubCallback: any;

  constructor() {
    this.kernelManager = null;
    this.currentKernel = null;
    this.currentKernelId = null;
    this.pubCallback = null;
  }

  connectToJupyter(url: string) {
    console.log("Connecting to Jupyter");
    const baseUrl = url.split("?")[0];
    const token = url.split("token=")[1];

    this.kernelManager = new KernelManager({ baseUrl: baseUrl, token: token });
  }

  async startKernel(): Promise<any> {
    console.log("Starting kernel");
    const kernel = await this.kernelManager?.startNew({ name: "python3" });
    if (!kernel) {
      console.error("Kernel not started");
      return;
    }
    console.log("Kernel started", kernel);
    this.currentKernel = kernel as DefaultKernel;
    this.currentKernelId = kernel?.id;

    return kernel;
  }

  setPubCallback(callback: any) {
    this.pubCallback = callback;
  }

  runCode(code: string): any {
    console.log("Running code");

    let future = this.currentKernel?.requestExecute({ code: code });
    if (!future) {
      console.error("Error running code");
      return;
    }

    future.onIOPub = function (msg: any) {
      console.log(msg.content);
      if (this.pubCallback) {
        this.pubCallback(msg);
      }
    };

    return future;
  }
}

const cocoServerApi = new CocoServerApi();

const api = {
  connectToJupyter: cocoServerApi.connectToJupyter.bind(cocoServerApi),
  startKernel: cocoServerApi.startKernel.bind(cocoServerApi),
  runCode: cocoServerApi.runCode.bind(cocoServerApi),
  setPubCallback: cocoServerApi.setPubCallback.bind(cocoServerApi),
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("cocoServerApi", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.cocoServerApi = api;
}
