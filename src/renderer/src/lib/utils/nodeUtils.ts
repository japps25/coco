import { writable } from 'svelte/store';

// Initialize a store to hold all node IDs
export const nodeIds = writable<string[]>([]);

export const edgeIds = writable<string[]>([]);

// Function to add a new node ID to the store
export function addNodeId(id: string) {
  nodeIds.update(ids => [...ids, id]);
}

export function addEdgeId(id: string) {
  edgeIds.update(ids => [...ids, id]);
}




