import React, { useEffect, useState } from 'react';
import { Slider } from "antd";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Card } from "antd";
import { Typography } from 'antd';

import useStore from "@/app/_core/lib/State";

const Threshhold = ({ nodeId }) => {
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const currentThresh = selectedNode.node._user_data.thresh;
    const [val, setVal] = useState(currentThresh)
    useEffect(() => {
        console.log("running use")
    }, [])
    const onValueChange = (thresh) => {
        console.log(thresh);
        setVal(String(thresh))
        modifyNodeProperty(nodeId, "thresh", String(thresh))
    }
    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left"
                }}

            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>Threshhold</TooltipTrigger>
                        <TooltipContent>
                            Minimum points to consider a line.
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>


            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <Slider
                    min={1}
                    max={250}
                    onChange={onValueChange}
                    value={parseInt(val)}
                />
            </Card>
        </>
    )

}
export default Threshhold;