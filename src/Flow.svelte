<script lang="ts">
    import { writable } from 'svelte/store';

    import CodeEditorNode from "./lib/components/CodeEditorNode.svelte";
    import CommandMenu from "./lib/components/CommandMenu.svelte";
    import ELK from 'elkjs/lib/elk.bundled.js';
    
    import {
      SvelteFlow,
      Background,
      Position,
      ConnectionLineType,
      Panel,
      useSvelteFlow,
      type Node,
      type Edge
    } from '@xyflow/svelte';
  
    import '@xyflow/svelte/dist/style.css';
    
    import { onMount } from 'svelte';
    

    const nodeTypes = {
        commandMenu: CommandMenu,
        selectorNode: CodeEditorNode,
    };
    
    const position = { x: 0, y: 0 };
    const edgeType = 'bezier';

  
    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    };

 
    const initialNodes: Node[] = [
    {
      id: '0',
      type: 'selectorNode',
      data: { label: 'Node' },
      position: { x: 0, y: 50 },
        ...nodeDefaults,
        connectable: true
    }
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
      'elk.algorithm': 'layered',
      'elk.layered.spacing.nodeNodeBetweenLayers': '100',
      'elk.spacing.nodeNode': '80'
    };
  
    function getLayoutedElements(nodes: Node[], edges: Edge[], options = {}) {
      const isHorizontal = options?.['elk.direction'] === 'RIGHT';
      const graph = {
        id: 'root',
        layoutOptions: options,
        children: nodes.map((node) => ({
          ...node,
          // Adjust the target and source handle positions based on the layout
          // direction.
          targetPosition: isHorizontal ? Position.Left : Position.Top,
          sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
  
          // Hardcode a width and height for elk to use when layouting.
          width: 400,
          height: 50
        })),
        edges: edges
      };
  
      return elk
        .layout(graph)
        .then((layoutedGraph) => ({
          nodes: layoutedGraph.children.map((node) => ({
            ...node,
            // React Flow expects a position property on the node instead of `x`
            // and `y` fields.
            position: { x: node.x, y: node.y }
          })),
  
          edges: layoutedGraph.edges
        }))
        .catch(console.error);
    }

    //add a new cell to the last element on the graph 
    function addNewGraphElement(nodeType: string = 'selectorNode', edgeType: string = 'bezier') {
      const lastNode = $nodes[$nodes.length - 1];
      const lastEdge = $edges[$edges.length - 1];
      const newId = parseInt(lastNode.id) + 1;
      const newNode = {
        id: newId.toString(),
        type: nodeType,
        data: { label: `Node ${newId}` },
        position: { x: lastNode.position.x + 100, y: lastNode.position.y + 100 },
        ...nodeDefaults, 
        connectable: true
      };
      const newEdge = {
        id: `e${newId - 1}${newId}`,
        source: lastNode.id,
        target: newNode.id,
        type: edgeType
      };
      $nodes = [...$nodes, newNode];
      $edges = [...$edges, newEdge];
    }
  
    function onLayout(direction: string, useInitialNodes = false) {
      const opts = { 'elk.direction': direction, ...elkOptions };
      const ns = useInitialNodes ? initialNodes : $nodes;
      const es = useInitialNodes ? initialEdges : $edges;
  
      getLayoutedElements(ns, es, opts).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
        $nodes = layoutedNodes;
        $edges = layoutedEdges;
  
        fitView();
  
        window.requestAnimationFrame(() => fitView());
      });


    }
  
    onMount(() => {
      onLayout('DOWN', true);
    });


    let currentId = 0;

    function handleKeydown(event: KeyboardEvent) {
    switch (event.code) {
      case "Tab":
        event.preventDefault();
        addNewGraphElement();
        break;
    }
    }


</script>


<svelte:window on:keydown={handleKeydown} />

<div style="height:100vh;">
<SvelteFlow
    {nodes}
    {edges}
    {nodeTypes}
    fitView
>
    <Panel position="top-right">
    <button on:click={() => onLayout('DOWN')}>vertical layout</button>
    <button on:click={() => onLayout('RIGHT')}>horizontal layout</button>
    </Panel>
    <Background />
</SvelteFlow>
</div>

  