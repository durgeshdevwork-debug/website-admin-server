import { Edge } from 'edge.js';

// Create a singleton Edge instance
export const edge = Edge.create();

// Mount your views directory (templates)
edge.mount(new URL('./templates', import.meta.url));