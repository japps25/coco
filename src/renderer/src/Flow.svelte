<script lang="ts">
  import { writable } from "svelte/store";
  import CodeEditorNode from "./lib/components/CodeEditorNode.svelte";
  import CommandMenu from "./lib/components/CommandMenu.svelte";
  import ELK from "elkjs/lib/elk.bundled.js";

  import {
    SvelteFlow,
    // MarkerType,
    // Background,
    Position,
    ConnectionLineType,
    // BackgroundVariant,
    // Panel,
    useSvelteFlow,
    type Node,
    type Edge,
  } from "@xyflow/svelte";

  import "@xyflow/svelte/dist/style.css";

  import { onMount } from "svelte";

  const nodeTypes = {
    commandMenu: CommandMenu,
    selectorNode: CodeEditorNode,
  };

  const bgColor = writable("#0c0e12 ");

  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const initialNodes: Node[] = [
    {
      id: "0",
      type: "selectorNode",
      data: { label: "Node" },
      position: { x: 0, y: 0 },
      ...nodeDefaults,
      connectable: true,
    },
  ];

  export const initialEdges: Edge[] = [];

  const nodes = writable<Node[]>([]);
  const edges = writable<Edge[]>([]);

  const { fitView } = useSvelteFlow();

  const elk = new ELK();

  // Elk has a *huge* amount of options to configure. To see everything you can
  // tweak check out:
  //
  // - https://www.eclipse.org/elk/reference/algorithms.html
  // - https://www.eclipse.org/elk/reference/options.html
  const elkOptions = {
    "elk.algorithm": "layered",
    "elk.layered.spacing.nodeNodeBetweenLayers": "100",
    "elk.spacing.nodeNode": "80",
  };

  const getLayoutedElements = async (nodes: Node[], edges: Edge[], options = {}): Promise<{ nodes: Node[]; edges: Edge[] }> => {
    const isHorizontal = options?.["elk.direction"] === "RIGHT";

    const layoutedGraph = await elk.layout({
      id: "root",
      layoutOptions: options,
      children: nodes.map((node) => ({
        ...node,
        targetPosition: isHorizontal ? Position.Left : Position.Top,
        sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
        width: 400,
        height: 50,
      })),
      edges: edges.map((edge) => ({
        ...edge,
        sources: [edge.source],
        targets: [edge.target],
      })),
    });

    return {
      nodes: layoutedGraph.children.map((node) => ({
        ...node,
        // React Flow expects a position property on the node instead of `x`
        // and `y` fields.
        position: { x: node.x, y: node.y },
        data: {}, // Add the missing `data` property
      })),

      edges: layoutedGraph.edges.map((edge) => ({
        ...edge,
        source: edge.sources[0], // Map the `source` property
        target: edge.targets[0], // Map the `target` property
      })),
    };
  };

  //add a new cell to the last element on the graph
  function addNewGraphElement(nodeType: string = "selectorNode") {
    const lastNode = $nodes[$nodes.length - 1];
    // const lastEdge = $edges[$edges.length - 1];
    const newId = parseInt(lastNode.id) + 1;
    const newNode = {
      id: newId.toString(),
      type: nodeType,
      data: { label: `Node ${newId}` },
      position: { x: lastNode.position.x, y: lastNode.position.y + 100 },
      ...nodeDefaults,
      connectable: true,
    };
    const newEdge = {
      id: `e${newId - 1}${newId}`,
      source: lastNode.id,
      target: newNode.id,
      type: "smoothstep",
      style: "stroke-width: 5px; stroke: #FF4000",
      animated: false,
    };
    $nodes = [...$nodes, newNode];
    $edges = [...$edges, newEdge];
  }

  function onLayout(direction: string, useInitialNodes = false) {
    const opts = { "elk.direction": direction, ...elkOptions };
    const ns = useInitialNodes ? initialNodes : $nodes;
    const es = useInitialNodes ? initialEdges : $edges;

    getLayoutedElements(ns, es, opts).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
      $nodes = layoutedNodes;
      $edges = layoutedEdges;

      fitView();

      window.requestAnimationFrame(() => fitView());
    });
  }

  // let currentId = 0;

  function handleKeydown(event: KeyboardEvent) {
    switch (event.code) {
      case "Tab":
        event.preventDefault();
        addNewGraphElement();
        break;
      case "Backspace":
        event.preventDefault();
        break;

      default:
        break;
    }
  }

  onMount(() => {
    onLayout("DOWN", true);

    async () => {
      const layoutedElements = await getLayoutedElements(initialNodes, initialEdges);
      nodes.set(layoutedElements.nodes);
      edges.set(layoutedElements.edges);
    };
  });
</script>

<div class="svelte-flow__background" on:keydown={handleKeydown} role="presentation">
  <SvelteFlow
    {nodes}
    {edges}
    {nodeTypes}
    fitView
    connectionLineType={ConnectionLineType.Step}
    defaultEdgeOptions={{
      type: "smoothstep",
      style: "stroke-width: 5px; stroke: #FF4000",
    }}
    style="background: {$bgColor}; margin-top: 2rem"
  >
    <!-- <Panel position="top-right">
      <button on:click={() => onLayout("DOWN")}>Reset layout</button>
    </Panel> -->
  </SvelteFlow>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .svelte-flow__background {
    height: 100vh;
    overflow: hidden;
  }

  /* .svelte-flow__node {
    background-color: #1e1e1e;
    border: 1px solid #2d2d2d;
    border-radius: 0.4rem;
    padding: 0.5rem;
  }

  .svelte-flow__node:hover {
    border-color: #09d3ac;
  }

  .svelte-flow__node[data-selected] {
    border-color: #09d3ac;
  }

  .svelte-flow__node[data-connectable] {
    cursor: pointer;
  }

  .svelte-flow__node[data-connectable]:hover {
    border-color: #09d3ac;
  }

  .svelte-flow__edge {
    stroke: #09d3ac;
    stroke-width: 2;
  }

  .svelte-flow__edge[data-selected] {
    stroke: #09d3ac;
  }

  .svelte-flow__edge[data-animated] {
    stroke-dasharray: 5;
    animation: dash 1s linear infinite;
  } */

  @keyframes dash {
    to {
      stroke-dashoffset: -10;
    }
  }
</style>
