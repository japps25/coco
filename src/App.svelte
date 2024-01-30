<script lang="ts">
  import { writable } from "svelte/store";
  import dagre from "@dagrejs/dagre";
  import { SvelteFlow, Panel, Background, Controls, MiniMap, Position, type Node, type Edge } from "@xyflow/svelte";
  import CodeEditorNode from "./lib/components/CodeEditorNode.svelte";
  import CommandMenu from "./lib/components/CommandMenu.svelte";

  import "@xyflow/svelte/dist/style.css";

  const nodeTypes = {
    commandMenu: CommandMenu,
    selectorNode: CodeEditorNode,
  };

  const bgColor = writable("#1A192B");

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 172;
  const nodeHeight = 36;

  function getLayoutedElements(nodes: Node[], edges: Edge[], direction = "TB") {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? Position.Left : Position.Top;
      node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    });

    return { nodes, edges };
  }

  let currentId = 0;

  const nodes = writable<Node[]>([]);
  const edges = writable<Edge[]>([]);

  function onLayout(direction: string) {
    const layoutedElements = getLayoutedElements($nodes, $edges, direction);
    $nodes = layoutedElements.nodes;
    $edges = layoutedElements.edges;
  }

  function handleKeydown(event: KeyboardEvent) {
    switch (event.code) {
      case "Tab":
        event.preventDefault();
        nodes.update((nodes) => [
          ...nodes,
          { id: `node-${currentId++}`, type: "selectorNode", data: { label: `Node ${currentId++}` }, position: { x: 250, y: 5 } },
        ]);
        break;
      case "Space":
        event.preventDefault();
        break;
      case "Backspace":
        event.preventDefault();
        break;
      case "KeyR":
        event.preventDefault();
        break;
      case "KeyL":
        event.preventDefault();
        break;
      default:
        break;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div style="height:100vh;">
  <SvelteFlow {nodes} {edges} {nodeTypes} style="background: {$bgColor}" fitView>
    <!-- <Panel position="top-right">
      <button on:click={() => onLayout("TB")}>vertical layout</button>
      <button on:click={() => onLayout("LR")}>horizontal layout</button>
    </Panel> -->
    <Background />
    <Controls />
    <!-- <MiniMap /> -->
  </SvelteFlow>
</div>
