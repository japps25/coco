<script lang="ts">
  import { SvelteFlow, ConnectionLineType } from "@xyflow/svelte";
  import { writable } from "svelte/store";
  import { GraphManager } from "./graphManager";
  import CodeEditorNode from "./lib/components/CodeEditorNode.svelte";
  import CommandMenu from "./lib/components/CommandMenu.svelte";
  import { CustomEdge } from "./lib/components/CustomEdge.svelte";
  import "@xyflow/svelte/dist/style.css";

  /* 
  function removeLastGraphElement() {
    const lastNode = $nodes[$nodes.length - 1];
    const lastEdge = $edges[$edges.length - 1];
    $nodes = $nodes.filter((node) => node.id !== lastNode.id);
    $edges = $edges.filter((edge) => edge.id !== lastEdge.id);
  } */

  const nodeTypes = {
    commandMenu: CommandMenu,
    codeEditor: CodeEditorNode,
  };

  const edgeTypes = {
    default: CustomEdge,
  };

  const graphManager = new GraphManager();
  const bgColor = writable("#0c0e12 ");

  function handleKeydown(event: KeyboardEvent) {
    switch (event.code) {
      case "ShiftLeft":
        event.preventDefault();
        graphManager.addNewNode();
        console.log("New Node added");
        break;

      case "Backspace":
        event.preventDefault();
        break;

      case "Delete":
        event.preventDefault();
        break;

      default:
        break;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="svelte-flow__background" role="presentation">
  <SvelteFlow
    nodes={graphManager.Nodes}
    edges={graphManager.Edges}
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
