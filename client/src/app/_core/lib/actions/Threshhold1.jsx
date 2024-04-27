import React, { useEffect, useState } from 'react';
import { Slider } from "@/components/ui/slider"

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
    const onValueChange = (thresh) => {
        console.log(thresh);
        setVal(String(thresh))
        modifyNodeProperty(nodeId, "thresh1", String(thresh))
    }
    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left"
                }}

            >
                Threshhold 1
            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <Slider defaultValue={[parseInt(currentThresh1)]} onValueChange={onValueChange} max={1000} step={1} />
                <span>{parseInt(val)}</span>
            </Card>
        </>
    )

}
export default Threshhold1;