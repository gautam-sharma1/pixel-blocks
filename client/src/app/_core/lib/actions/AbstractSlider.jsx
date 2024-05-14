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
import themeConstant from '../../themeConstants';

const AbstractSlider = ({ nodeId, menuSchema }) => {

    const { propName, displayName, description, min, max } = menuSchema;

    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    const currentStoredValInCache = selectedNode.node._user_data[propName];
    const [val, setVal] = useState(currentStoredValInCache)
    // useEffect(() => {
    //     console.log("running use")
    // }, [])
    const onValueChange = (newVal) => {
        setVal(String(newVal))
        modifyNodeProperty(nodeId, propName, String(newVal))
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
            <Card size="small" className="border-slate-600" style={{ width: 200, background: themeConstant.color_bg_container }}>
                <Slider
                    min={min}
                    max={max}
                    onChange={onValueChange}
                    value={parseInt(val)}
                />
            </Card>
        </>
    )

}
export default AbstractSlider;