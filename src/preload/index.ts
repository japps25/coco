import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

import { KernelManager } from "../proxy/manager";
import { Kernel } from "../proxy/kernel";

interface ICocoServerApi {
  /**
   * Connect to a Jupyter server.
   *
   * @param url Jupyter server URL
   */
  connectToJupyter(url: string): void;

  /**
   * Check if the server is ready.
   *
   * @returns True if the server is ready, false otherwise
   */
  isReady(): boolean;

  /**
   * Wait for the server to be ready.
   *
   * @returns Promise that resolves when the server is ready
   */
  ready(): Promise<void>;

  /**
   * Start a new kernel.
   *
   * @param name Kernel name (e.g. "python3")
   * @returns Promise that resolves to the kernel ID
   */
  startNewKernel(name: string): Promise<string>;

  /**
   * Shutdown a kernel.
   *
   * @param kernelId Kernel ID
   * @returns Promise that resolves when the kernel has been shutdown
   */
  shutdownKernel(kernelId: string): Promise<void>;

  /**
   * Execute code in a kernel.
   *
   * @param kernelId Kernel ID
   * @param nodeId Node ID
   * @param code Code to execute
   * @returns Promise that resolves when the code has been executed
   */
  executeCode(kernelId: string, nodeId: string, code: string): Promise<void>;

  /**
   * Set a callback to be called when a message is received from a kernel.
   *
   * @param nodeId Node ID
   * @param callback Callback function
   */
  setPubCallback(nodeId: string, callback: (msg: any) => void): void;
}

class CocoServerApi {
  private kernelManager: KernelManager | null;

  // pubCallback is a map to store callbacks for each editor node
  private kernels: Map<string, Kernel.IKernel>;
  private pubCallbacks: Map<string, (msg: any) => void>;

  constructor() {
    this.kernelManager = null;
    this.kernels = new Map<string, Kernel.IKernel>();
    this.pubCallbacks = new Map<string, (msg: any) => void>();
  }

  connectToJupyter = (url: string): void => {
    const baseUrl = url.split("?")[0];
    const token = url.split("token=")[1];

    this.kernelManager = new KernelManager({ baseUrl: baseUrl, token: token });
  };

  isReady = (): boolean => {
    if (!this.kernelManager) {
      return false;
    }
    return this.kernelManager.isReady;
  };

  ready = (): Promise<void> => {
    if (!this.kernelManager) {
      return Promise.reject("Kernel manager not initialized");
    }

    return this.kernelManager.ready;
  };

  startNewKernel = async (name: string = "python3"): Promise<string> => {
    if (!this.isReady()) {
      console.error("Kernel manager not ready");
      return "";
    }

    const kernel = await this.kernelManager!.startNew({ name: name });
    if (!kernel) {
      console.error("Kernel not started");
      return "";
    }

    this.kernels.set(kernel.id, kernel);
    return kernel.id;
  };

  shutdownKernel = async (kernelId: string): Promise<void> => {
    const kernel = this.kernels.get(kernelId);
    if (!kernel) {
      console.error(`Kernel ${kernelId} not found`);
      return;
    }

    await kernel.shutdown();
    this.kernels.delete(kernelId);
  };

  setPubCallback = (nodeId: string, callback: (msg: any) => void): void => {
    // Store the callback with the nodeId as the key
    this.pubCallbacks.set(nodeId, callback);
  };

  executeCode = async (kernelId: string, nodeId: string, code: string): Promise<void> => {
    const kernel = this.kernels.get(kernelId);
    if (!kernel) {
      console.error(`Kernel ${kernelId} not found`);
      return;
    }

    let future = kernel.requestExecute({ code: code });
    if (!future) {
      console.error("Error running code");
      return;
    }

    future.onIOPub = (msg: any) => {
      // Use an arrow function here
      const callback = this.pubCallbacks.get(nodeId);
      if (callback) {
        callback(msg);
      }
    };
  };
}

const cocoServerApi = new CocoServerApi();

const api = {
  connectToJupyter: cocoServerApi.connectToJupyter.bind(cocoServerApi),
  isReady: cocoServerApi.isReady.bind(cocoServerApi),
  ready: cocoServerApi.ready.bind(cocoServerApi),
  startNewKernel: cocoServerApi.startNewKernel.bind(cocoServerApi),
  shutdownKernel: cocoServerApi.shutdownKernel.bind(cocoServerApi),
  executeCode: cocoServerApi.executeCode.bind(cocoServerApi),
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
