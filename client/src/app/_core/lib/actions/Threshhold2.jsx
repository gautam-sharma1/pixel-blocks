import React, { useEffect, useState } from 'react';
import { Slider } from "@/components/ui/slider"

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
    const onValueChange = (thresh) => {
        setVal(String(thresh))
        modifyNodeProperty(nodeId, "thresh2", String(thresh))
    }
    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left"
                }}

            >
                Threshhold 2
            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <Slider defaultValue={[parseInt(currentThresh2)]} onValueChange={onValueChange} max={1000} step={1} />
                <span>{parseInt(val)}</span>
            </Card>
        </>
    )

}
export default Threshhold2;