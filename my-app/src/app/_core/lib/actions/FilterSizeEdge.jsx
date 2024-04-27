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

const FilterSizeEdge = ({ nodeId }) => {
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const onPropChange = useStore((s) => s.onPropChange);

    const currentFilterSize = selectedNode.node._user_data.filter_size;

    const onValueChange = (filterSize) => {
        onPropChange(); // Just a dummy event so that filter x and Y can be set accordingly
        modifyNodeProperty(nodeId, "filter_size", filterSize)
    }

    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left"
                }}

            >
                Filter size
            </Typography.Title>
            <Card size="small" className="border-amber-900" style={{ width: 250 }}>

                <Select onValueChange={onValueChange} defaultValue={currentFilterSize}>
                    <SelectTrigger>
                        <SelectValue placeholder="Filter Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1x1</SelectItem>
                        <SelectItem value="3">3x3</SelectItem>
                        <SelectItem value="5">5x5</SelectItem>
                        <SelectItem value="7">7x7</SelectItem>
                        <SelectItem value="9">9x9</SelectItem>
                        <SelectItem value="11">11x11</SelectItem>
                        <SelectItem value="13">13x13</SelectItem>
                        <SelectItem value="15">15x15</SelectItem>
                    </SelectContent>
                </Select>
            </Card>
        </>
    )

}
export default FilterSizeEdge;