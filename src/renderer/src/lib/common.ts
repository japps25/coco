export interface ICocoServerApi {
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

export class CocoCommand {
  public name: string;
  public description: string;
  public value: string;

  constructor(name: string, description: string, value: string) {
    this.name = name;
    this.description = description;
    this.value = value;
  }
}

export const COMMANDS = {
  "coco-add-pipeline": new CocoCommand("coco-add-pipeline", "Add a new pipeline", "coco-add-pipeline"),
  "coco-add-cell": new CocoCommand("coco-add-cell", "Add a new cell", "coco-add-cell"),
};
