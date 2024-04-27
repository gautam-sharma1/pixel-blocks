import React, {useEffect} from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Card} from "antd";
import { Radio, Typography } from 'antd';

import useStore from "@/app/_core/lib/State";

const DerivativeMagnitudeX = ({nodeId}) => {
    const modifyNodeProperty = useStore((s)=>s.modifyNodeProperty);
    const selectedNode = useStore((s)=>s.selectedNode);
    const maxDerivativesAllowed = selectedNode.node._user_data.filter_size;

    const currentDxSize = selectedNode.node._user_data.dx;
    useEffect(()=>{
        console.log("running use")
    },[])
    const onValueChange = (dx) => {
        console.log(dx)
        modifyNodeProperty(nodeId, "dx", dx)
    }

    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left"
                }}

            >
                Derivative order in x
            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <Select onValueChange={onValueChange} defaultValue={currentDxSize}>
                    <SelectTrigger>
                        <SelectValue placeholder="Derivative Order in x" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="7">7</SelectItem>
                    </SelectContent>
                </Select>
            </Card>
        </>
    )

}
export default DerivativeMagnitudeX;