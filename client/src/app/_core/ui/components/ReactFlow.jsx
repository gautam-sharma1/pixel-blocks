"use client"

import { useCallback, useMemo } from 'react';


import 'reactflow/dist/style.css';
import useStore from "@/app/_core/lib/State";
import ContextMenu from "@/app/_core/lib/context_menu/ContextMenu";
import ResizableNode from './ResizableNode';
import ResizableInputNode from './ResizableInputNode';
import ResizableOutputNode from './ResizableOutputNode';
import ReactFlow, { updateEdge, Background } from 'reactflow';
import nodeTypes from './NodeTypes';

function Flow({ nodes, setNodes, edges, setEdges, edgeTypes }) {
    const proOptions = { hideAttribution: true }
    const onNodesChange = useStore((s) => s.onNodesChange)
    const onConnect = useStore((s) => s.onConnect);
    const onEdgesChange = useStore((s) => s.onEdgesChange)
    const onNodeContextMenu = useStore((s) => s.onNodeContextMenu)
    const onSelectionChange = useStore((s) => s.onSelectionChange)
    const ref = useStore((s) => s.ref)
    const menu = useStore((s) => s.menu)
    const setMenu = useStore((s) => s.setMenu)
    const nodeType = useStore((s) => s.nodeType)
    const isValidConnection = useStore((s) => s.isValidConnection);
    const myNodeTypes = useMemo(
        () => ({
            ResizableNode: nodeTypes.ResizableNode,
            ResizableInputNode: nodeTypes.ResizableNode,
            ResizableOutputNode: nodeTypes.ResizableNode,
        }),
        [],
    );

    // Close the context menu if it's open whenever the window is clicked.
    const onPaneClick = useCallback(() => setMenu(null), [setMenu]);
    const styles = {
        width: "400px",
        height: '100%',
    };
    console.log("nodes", nodes);
    if (nodes[0]) {
        console.log(nodes[0].dialog_schema)
    }
    // nodes.map((node)=> {
    //     return (<ResizableNode />)
    // })


    return (
        <ReactFlow
            className="react-flow-node-resizer-example"
            style={styles}
            ref={ref}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            edgeTypes={edgeTypes}
            fitView
            proOptions={proOptions}
            onPaneClick={onPaneClick}
            onSelectionChange={onSelectionChange}
            onNodeContextMenu={onNodeContextMenu}
            isValidConnection={isValidConnection}
            nodeTypes={myNodeTypes}
        // className="flex-grow"
        >

            <Background />
            {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
        </ReactFlow>
    );
}

export default Flow;