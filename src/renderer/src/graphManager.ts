import { Position, type Node, type Edge } from "@xyflow/svelte";
import { writable, type Writable } from "svelte/store";
import { CocoPipeline } from "./lib/components/Pipeline";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  deletable: false,
};

export class GraphManager {
  private currentNodeId: number;
  private currentPipelineId: number;

  private nodes: Writable<Node[]>;
  private edges: Writable<Edge[]>;

  private pipelines: Map<string, CocoPipeline>;

  constructor() {
    this.currentNodeId = 0;
    this.currentPipelineId = 0;

    this.nodes = writable<Node[]>([]);
    this.edges = writable<Edge[]>([]);

    this.pipelines = new Map();

    this.edges.subscribe((edges) => {
      console.log(edges);

      this.updatePipelines();
    });

    this.edges.update((edges) => {
      console.log(edges);
      return edges;
    });
  }

  get Nodes(): Writable<Node[]> {
    return this.nodes;
  }

  get Edges(): Writable<Edge[]> {
    return this.edges;
  }

  addNewNode = (nodeType: string = "codeEditor"): Node => {
    const nodeId = this.currentNodeId.toString();
    this.currentNodeId++;

    const newNode: Node = {
      id: nodeId,
      type: nodeType,
      data: {
        label: "New Node",
      },
      position: {
        x: 0,
        y: 0,
      },
      ...nodeDefaults,
      connectable: true,
    };

    this.nodes.update((nodes) => [...nodes, newNode]);

    return newNode;
  };

  deleteNode = (nodeId: string): void => {
    // TODO
  };

  // TODO: Add a pipelineId parameter
  addNewEdge = (sourceNodeId: string, targetNodeId: string, pipelineId: string): Edge => {
    let pipeline = this.pipelines.get(pipelineId);
    if (!pipeline) {
      pipeline = new CocoPipeline(`Pipeline ${this.currentPipelineId}`, "Description", "#FF0000");
      this.pipelines.set(pipelineId, pipeline);
      this.currentPipelineId++;
    }

    const newEdge = {
      id: `${sourceNodeId}-${targetNodeId}`,
      source: sourceNodeId,
      target: targetNodeId,
      type: "smoothstep",
      style: `stroke-width: 5px; stroke: ${pipeline?.Color};`,
      animated: false,
    };

    console.log(newEdge);

    this.edges.update((edges) => [...edges, newEdge]);

    this.updatePipelines();

    return newEdge;
  };

  deleteEdge = (sourceNodeId: string, targetNodeId: string): void => {
    // TODO

    this.updatePipelines();
  };

  private updatePipelines = (): void => {
    // TODO
  };
}
