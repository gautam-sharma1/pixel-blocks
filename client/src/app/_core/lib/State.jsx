'use client'
import { create } from 'zustand'
import {
    Connection,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    addEdge,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
    applyNodeChanges,
    applyEdgeChanges,
    getOutgoers,
    useOnSelectionChange

} from 'reactflow';

import ContextMenu from "@/app/_core/lib/context_menu/ContextMenu";

import Graph from "@/app/_core/lib/Graph";

const useBlockStore = create((set) => ({
    numBlocks: 0,
    increaseBlocks: () => set((state) => ({ numBlocks: state.numBlocks + 1 })),
    removeAllBlocks: () => set({ numBlocks: 0 }),
}))

// TODO remove it
const useNodeStore = create((set) => ({
    nodes: [],
    setNodes: (node) => set((state) => ({
        nodes: [...state.nodes, node]
    }
    )),
    // removeAllBlocks: () => set({ numBlocks: 0 }),
}))

const useGraphStore = create((set) => ({
    graph: new Graph(),
}))


// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    menu: null,
    ref: { current: null },
    nodeType: null,
    selectedNode: {},
    outputURL: null, // image url
    compileState: false,
    loading: false,
    propMenu: null,
    error: null,
    graph: new Graph(),

    setError: (change) => {
        set({
            error: change
        })
    },

    onPropChange: (change) => {
        set({
            propMenu: change,
        })
    },

    setCompileState: (change) => {
        set({
            compileState: change,
        });
    },
    setOutputURL: (value) => {
        set({
            outputURL: value
        })
    },

    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    onConnect: (connection) => {
        set({
            edges: addEdge(connection, get().edges),
        });
    },
    setNodes: (nodes) => {
        set({ nodes });
    },
    setEdges: (edges) => {
        set({ edges });
    },

    isValidConnection: (connection) => {
        const nodes = get().nodes;
        const edges = get().edges;
        const target = nodes.find((node) => node.id === connection.target);

        const hasCycle = (node, visited = new Set()) => {
            if (visited.has(node.id)) return false;
            visited.add(node.id);

            for (const outgoer of getOutgoers(node, nodes, edges)) {
                if (outgoer.id === connection.source) return true;
                if (hasCycle(outgoer, visited)) return true;
            }
        };

        if (target.id === connection.source) return false;
        return !hasCycle(target);
    },

    onSelectionChange: ({ nodes, edges }) => {
        const changedNode = nodes[0];
        if (changedNode) {
            set((state) => (
                {
                    selectedNode: {
                        id: changedNode.id,
                        type: changedNode._type,
                        node: changedNode
                    }
                }
            ))
        }

    },

    modifyNodeProperty: (nodeId, propertyName, propertyValue) => {
        set((state) => ({

            nodes: state.nodes.map((node) =>
                node.id === nodeId ? { ...node, _user_data: { ...node._user_data, [propertyName]: propertyValue } } : node
            ),
        })
        )
    },

    onNodeContextMenu: (event, node) => {
        // Prevent native context menu from showing
        event.preventDefault();

        // Calculate position of the context menu. We want to make sure it
        // doesn't get positioned off-screen.
        const pane = get().ref.current.getBoundingClientRect();
        console.log(get().ref.current.getBoundingClientRect());

        set({
            nodeType: node._type
        })

        set({
            menu: {
                id: node.id,
                top: event.clientY < pane.height - 200 && event.clientY,
                left: event.clientX < pane.width - 200 && event.clientX,
                right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
                bottom:
                    event.clientY >= pane.height - 200 && pane.height - event.clientY,
            },
        });
    },
    setMenu: (newMenu) => {
        set({ menu: newMenu });
    },
    setRef: (newRef) => {
        set({ ref: newRef });
    },
}));



export default useStore;


export { useBlockStore, useGraphStore, useNodeStore };
