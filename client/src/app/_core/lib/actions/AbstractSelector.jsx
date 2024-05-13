
import React, { useEffect } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Card } from "antd";
import { Radio, Typography } from 'antd';

import useStore from "@/app/_core/lib/State";

const FilterSizeEdge = ({ nodeId, menuSchema }) => {
    const { propName, displayName, description, selectors } = menuSchema;
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const onPropChange = useStore((s) => s.onPropChange);

    const currentStoredValInCache = selectedNode.node._user_data[propName];

    const onValueChange = (newVal) => {
        onPropChange(); // Just a dummy event so that filter x and Y can be set accordingly
        modifyNodeProperty(nodeId, propName, newVal)
    }

    return (
        <>
            <Typography.Title
                level={4}
                style={{
                    textAlign: "left",
                    fontSize: "12px"
                }}

            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>{displayName}</TooltipTrigger>
                        <TooltipContent>
                            {description}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </Typography.Title>
            <Card size="small" className="border-slate-600" style={{ width: 200 }}>

                <Select onValueChange={onValueChange} defaultValue={currentStoredValInCache}>
                    <SelectTrigger>
                        <SelectValue placeholder={displayName} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            selectors.map((selector, id) => {
                                return (
                                    <SelectItem key={id} value={selector.value}>{selector.text}</SelectItem>
                                )
                            })
                        }
                    </SelectContent>
                </Select>
            </Card>
        </>
    )

}
export default FilterSizeEdge;