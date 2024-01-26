<script lang="ts">
  import { writable } from 'svelte/store';
  import dagre from '@dagrejs/dagre';
  import {
    SvelteFlow,
    Background,
    Position,
    ConnectionLineType,
    Panel,
    type Node,
    type Edge
  } from '@xyflow/svelte';

  import '@xyflow/svelte/dist/style.css';

  import { initialNodes, initialEdges } from './nodes-and-edges';

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 172;
  const nodeHeight = 36;

  /**
   * Calculates the layout positions for the given nodes and edges using the dagre library.
   * @param {Node[]} nodes - The array of nodes.
   * @param {Edge[]} edges - The array of edges.
   * @param {string} direction - The direction of the layout (default: 'TB').
   * @returns {Object} - An object containing the layouted nodes and edges.
   */
  function getLayoutedElements(nodes: any[], edges: any[], direction = 'TB') {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node: { id: string | dagre.Label; targetPosition: Position; sourcePosition: Position; position: { x: number; y: number; }; }) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? Position.Left : Position.Top;
      node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2
      };
    });

    return { nodes, edges };
  }

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );

  const nodes = writable<Node[]>(layoutedNodes);
  const edges = writable<Edge[]>(layoutedEdges);

  /**
   * Performs layout for the elements based on the specified direction.
   * @param {string} direction - The direction of the layout.
   */
  function onLayout(direction: string) {
    const layoutedElements = getLayoutedElements($nodes, $edges, direction);

    $nodes = layoutedElements.nodes;
    $edges = layoutedElements.edges;
    // nodes.set(layoutedElements.nodes);
    // edges.set(layoutedElements.edges);
  }
</script>

<div style="height:100vh;">
  <SvelteFlow
    {nodes}
    {edges}
    fitView
    connectionLineType={ConnectionLineType.SmoothStep}
    defaultEdgeOptions={{ type: 'smoothstep', animated: true }}
  >
    <Panel position="top-right">
      <button on:click={() => onLayout('TB')}>vertical layout</button>
      <button on:click={() => onLayout('LR')}>horizontal layout</button>
    </Panel>
    <Background />
  </SvelteFlow>
</div>