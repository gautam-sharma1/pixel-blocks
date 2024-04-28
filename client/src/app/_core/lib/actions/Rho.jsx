import React, { useEffect, useState } from 'react';
import { InputNumber } from 'antd';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Card } from "antd";
import { Typography } from 'antd';

import useStore from "@/app/_core/lib/State";

const Rho = ({ nodeId }) => {
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const currentRho = selectedNode.node._user_data.rho;
    const [val, setVal] = useState(currentRho)
    useEffect(() => {
        console.log("running use")
    }, [])
    const onValueChange = (rho) => {
        console.log(rho);
        setVal(String(rho))
        modifyNodeProperty(nodeId, "thresh", String(rho))
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
                        <TooltipTrigger>Rho</TooltipTrigger>
                        <TooltipContent>
                            A line can be represented as rho = x cos(theta) + ysin(theta), where rho is the perpendicular distance from the origin to the line.
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <InputNumber min={1} max={200} defaultValue={parseInt(val)} onChange={onValueChange} />
            </Card>
        </>
    )

}
export default Rho;