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

const DerivativeMagnitudeY = ({nodeId}) => {
    const modifyNodeProperty = useStore((s)=>s.modifyNodeProperty);
    const selectedNode = useStore((s)=> s.selectedNode);
    const currentDySize = selectedNode.node._user_data.dy;

    const onValueChange = (dy) => {
        modifyNodeProperty(nodeId, "dy", dy)
    }

    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left"
                }}

            >
                Derivative order in y
            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>

                <Select onValueChange={onValueChange} defaultValue={currentDySize}>
                    <SelectTrigger>
                        <SelectValue placeholder="Derivative Order in y" />
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
                    {/*<SelectContent>*/}
                    {/*{*/}
                    {/*    [maxDerivativesAllowedInt].map((_, index) =>{*/}
                    {/*        return <SelectItem key={index} value={(index+1).toString()}>{(index+1).toString()}</SelectItem>*/}
                    {/*    })*/}
                    {/*}*/}
                    {/*    </SelectContent>*/}

                </Select>
            </Card>
        </>
    )

}
export default DerivativeMagnitudeY;