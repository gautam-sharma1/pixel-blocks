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

const Threshhold2 = ({ nodeId }) => {
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const currentThresh2 = selectedNode.node._user_data.thresh2;
    const [val, setVal] = useState(currentThresh2)
    useEffect(() => {
        console.log("running use")
    }, [])
    const onValueChange = (thresh2) => {
        console.log(thresh2);
        setVal(String(thresh2))
        modifyNodeProperty(nodeId, "thresh2", String(thresh2))
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
                        <TooltipTrigger>Threshhold 2</TooltipTrigger>
                        <TooltipContent>
                            Second threshold for the hysteresis procedure.
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

export default Threshhold2;