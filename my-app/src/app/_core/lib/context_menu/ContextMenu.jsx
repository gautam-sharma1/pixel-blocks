import React, { useCallback } from 'react';
import { useReactFlow } from 'reactflow';
import useStore from "@/app/_core/lib/State";
import "./ContextMenu.css"
export default function ContextMenu({
                                        id,
                                        top,
                                        left,
                                        right,
                                        bottom,
                                        ...props
                                    }) {
    const nodes = useStore((s)=>s.nodes);
    const setNodes = useStore((s)=>s.setNodes);
    const edges = useStore((s)=>s.edges);
    const setEdges = useStore((s)=>s.setEdges);
    // const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
    // const duplicateNode = useCallback(() => {
    //     const node = getNode(id);
    //     const position = {
    //         x: node.position.x + 50,
    //         y: node.position.y + 50,
    //     };
    //
    //     addNodes({
    //         ...node,
    //         selected: false,
    //         dragging: false,
    //         id: `${node.id}-copy`,
    //         position,
    //     });
    // }, [id, getNode, addNodes]);
    //
    const deleteNode = () =>{
        const newNodes =  nodes.filter((node) => node.id !== id);
        const newEdges = edges.filter((edge) => edge.source !== id);
        setNodes(newNodes);
        setEdges(newEdges);

    }
    // const deleteNode = useCallback(() => {
    //     setNodes((nodes) => nodes.filter((node) => node.id !== id));
    //     setEdges((edges) => edges.filter((edge) => edge.source !== id));
    // }, [id, setNodes, setEdges]);

    return (
        <div
            style={{ top, left, right, bottom }}
            className="context-menu text-black"
            {...props}

        >
            <p style={{ margin: '0.5em' }}>
                <small>node: {id}</small>
            </p>
            <button onClick={deleteNode}>delete</button>
        </div>
    );
}
