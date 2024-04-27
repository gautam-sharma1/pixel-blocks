import React, { useEffect } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card } from "antd";
import { Radio, Typography } from 'antd';

import useStore from "@/app/_core/lib/State";

const Color2Gray = ({ nodeId }) => {
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const currentColorScheme = selectedNode.node._user_data.color_scheme;
    useEffect(() => {
        console.log("running use")
    }, [])
    const onValueChange = (new_color_scheme) => {
        console.log(new_color_scheme)
        modifyNodeProperty(nodeId, "color_scheme", new_color_scheme)
    }
    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left"
                }}

            >
                Color Scheme
            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>
                <Select onValueChange={onValueChange} defaultValue={currentColorScheme}>
                    <SelectTrigger>
                        <SelectValue placeholder="Color Scheme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="rgb_to_gray">RGB to Gray</SelectItem>
                        <SelectItem value="bgr_to_gray">BGR to Gray</SelectItem>
                    </SelectContent>
                </Select>
            </Card>
        </>
    )

}

export default Color2Gray;