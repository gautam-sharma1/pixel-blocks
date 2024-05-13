import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import useStore from "@/app/_core/lib/State";
import { Button, Flex } from 'antd';
import { useReactFlow } from "reactflow";

import { cn } from '@/lib/utils';
import themeConstant from '../../themeConstants';

export async function getServerSideProps() {
    // Fetch data from external API
    return { props: process.env.COMPILE_URL }
}

const App = ({ compileURL }) => {

    const compileState = useStore((s) => s.compileState);
    const setCompileState = useStore((s) => s.setCompileState);
    const graph = useStore((state) => state.graph);
    const reactFlow = useReactFlow();
    const setOutputURL = useStore((s) => s.setOutputURL);
    const setError = useStore((s) => s.setError);
    async function handleCompile(e) {
        e.preventDefault();
        setCompileState(true);

        graph.setEdges(reactFlow.getEdges());
        graph.setNodes(reactFlow.getNodes());
        // graph.setOutputURL()

        const [status, value] = await graph.compile(compileURL);

        if (graph.error) {
            console.log("setting graph error", graph)
            setError(graph.error)
        } else {
            // only display the result if there is no error
            if (status) {
                setOutputURL(value);
            }
            setError(null);
        }

        setCompileState(false);
    }

    return (
        <Button type="primary" loading={compileState} onClick={handleCompile} className={cn(themeConstant.button.background, themeConstant.button.text)}>
            Compile
        </Button>
    );
};

export default App;