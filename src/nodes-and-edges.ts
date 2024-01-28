import type { Node, Edge } from '@xyflow/svelte';
import {Position} from '@xyflow/svelte';
import { writable } from 'svelte/store';
const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';
const bgColor = writable('#1A192B');
import '@xyflow/svelte/dist/style.css';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'dragHandleNode',
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
 
];

export const initialEdges: Edge[] = [
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
