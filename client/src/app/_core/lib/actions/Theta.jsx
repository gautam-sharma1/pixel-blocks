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

const Theta = ({ nodeId }) => {
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const currentTheta = selectedNode.node._user_data.theta;
    const [val, setVal] = useState(currentTheta)
    useEffect(() => {
        console.log("running use")
    }, [])
    const onValueChange = (theta) => {
        console.log(theta);
        setVal(String(theta))
        modifyNodeProperty(nodeId, "theta", String(theta))
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
                        <TooltipTrigger>Theta</TooltipTrigger>
                        <TooltipContent>
                            A line can be represented as rho = x cos(theta) + ysin(theta), where theta is the angle formed by this perpendicular line and the horizontal axis measured in counter-clockwise.

                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <Slider
                    min={1}
                    max={360}
                    onChange={onValueChange}
                    value={parseInt(val)}
                />
            </Card>
        </>
    )

}
export default Theta;