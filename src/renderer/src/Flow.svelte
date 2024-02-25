<script lang="ts">
  import { writable } from "svelte/store";
  import CodeEditorNode from "./lib/components/CodeEditorNode.svelte";
  import CommandMenu from "./lib/components/CommandMenu.svelte";

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
    Background,
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
    deletable: false,
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

  function removeLastGraphElement() {
    const lastNode = $nodes[$nodes.length - 1];
    const lastEdge = $edges[$edges.length - 1];
    $nodes = $nodes.filter((node) => node.id !== lastNode.id);
    $edges = $edges.filter((edge) => edge.id !== lastEdge.id);
  }

  function handleKeydown(event: KeyboardEvent) {
    switch (event.code) {
      case "ShiftLeft":
        event.preventDefault();
        addNewGraphElement();
        break;
      case "Backspace":
        event.preventDefault();
        break;
      case "Delete":
        removeLastGraphElement();
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  onMount(() => {
    nodes.set(initialNodes);
    edges.set(initialEdges);
    fitView();
    window.requestAnimationFrame(() => fitView());
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="svelte-flow__background" role="presentation">
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
  />
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
