import type { ICocoServerApi } from "../common";

// @ts-ignore
const api = window.cocoServerApi as ICocoServerApi;

export class CocoPipeline {
  private name: string;
  private description: string;
  private kernelId: string;
  private kernelName: string;
  private color: string;
  private nodeIds: string[] = [];

  constructor(name: string, description: string, color: string) {
    this.name = name;
    this.description = description;
    this.color = color;
    this.nodeIds = [];

    this.kernelId = "";
    this.kernelName = "python3";

    // Start a new kernel
    api
      .startNewKernel(this.kernelName)
      .then((kernelId) => {
        this.kernelId = kernelId;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  get Name(): string {
    return this.name;
  }

  get Description(): string {
    return this.description;
  }

  get Color(): string {
    return this.color;
  }

  set Color(color: string) {
    this.color = color;
  }

  pushNodeId(nodeId: string): void {
    this.nodeIds.push(nodeId);
  }

  runAll(): void {
    this.nodeIds.forEach((nodeId) => {
      api.executeCode(this.kernelId, nodeId, "run");
    });
  }
}
