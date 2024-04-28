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

const Threshhold1 = ({ nodeId }) => {
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const currentThresh1 = selectedNode.node._user_data.thresh1;
    const [val, setVal] = useState(currentThresh1)
    useEffect(() => {
        console.log("running use")
    }, [])
    const onValueChange = (thresh1) => {
        console.log(thresh1);
        setVal(String(thresh1))
        modifyNodeProperty(nodeId, "thresh1", String(thresh1))
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
                        <TooltipTrigger>Threshhold 1</TooltipTrigger>
                        <TooltipContent>
                            First threshold for the hysteresis procedure.
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <Slider
                    min={1}
                    max={1000}
                    onChange={onValueChange}
                    value={parseInt(val)}
                />
            </Card>
        </>
    )
}

export default Threshhold1;