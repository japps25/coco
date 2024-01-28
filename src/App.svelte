<script lang="ts">
  import { writable } from 'svelte/store';
  import dagre from '@dagrejs/dagre';
  import {
    SvelteFlow,
    ConnectionLineType,
    Panel,
    Background,
    Controls,
    MiniMap,
    Position,
    type Node,
    type Edge
  } from '@xyflow/svelte';

  import CodeEditorNode from './lib/components/CodeEditorNode.svelte';


  import '@xyflow/svelte/dist/style.css';

  const nodeTypes = {
    selectorNode: CodeEditorNode
  };

  const bgColor = writable('#1A192B');

  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'input',
      data: { label: 'An input node' },
      position: { x: 0, y: 50 },
      sourcePosition: Position.Right
    },
    {
      id: '2',
      type: 'selectorNode',
      data: { color: bgColor },
      style: 'border: 1px solid #777; padding: 10px;',
      position: { x: 300, y: 50 }
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output A' },
      position: { x: 650, y: 25 },
      targetPosition: Position.Left
    },
    {
      id: '4',
      type: 'output',
      data: { label: 'Output B' },
      position: { x: 650, y: 100 },
      targetPosition: Position.Left
    }
  ];

  const initialEdges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: true,
      style: 'stroke: #fff;'
    },
    {
      id: 'e2a-3',
      source: '2',
      target: '3',
      sourceHandle: 'a',
      animated: true,
      style: 'stroke: #fff;'
    },
    {
      id: 'e2b-4',
      source: '2',
      target: '4',
      sourceHandle: 'b',
      animated: true,
      style: 'stroke: #fff;'
    }
  ];

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 172;
  const nodeHeight = 36;


  function getLayoutedElements(nodes: Node[], edges: Edge[], direction = 'TB') {
    const isHorizontal = direction === 'LR';
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
    {nodeTypes} 
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
