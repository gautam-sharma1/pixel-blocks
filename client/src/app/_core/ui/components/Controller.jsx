"use client"

import { useEffect, useState } from 'react';
import Flow from "@/app/_core/ui/components/ReactFlow"
import CustomEdge from '@/app/_core/lib/CustomEdge'

import { AlertDestructive } from "@/app/_core/lib/alert/Alert";
import useStore from "@/app/_core/lib/State";

const edgeTypes = {
    'custom-edge': CustomEdge
}


export default function GraphController() {
    const setNodes = useStore((s) => s.setNodes)
    const nodes = useStore((s) => s.nodes);
    const setEdges = useStore((s) => s.setEdges)
    const edges = useStore((s) => s.edges);
    const error = useStore((state) => state.error)
    const setError = useStore((state) => state.setError)

    // Just display the error message for 5 seconds
    const onCleanup = () => {
        setTimeout(() => {
            // setError(null);
        }, 5000)
    }

    useEffect(() => {
        console.log("something changed");
    }, [])

    return (

        <>
            {error && <AlertDestructive text={error} onCleanup={onCleanup} />}
            <Flow nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} edgeTypes={edgeTypes} />
        </>


    )
}