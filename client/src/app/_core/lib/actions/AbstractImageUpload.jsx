'use client'

import React from 'react';
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { Card } from "antd";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import useStore from "@/app/_core/lib/State";
import themeConstant from '../../themeConstants';

const AbstractImageUpload = ({ nodeId, menuSchema }) => {
    const { propName, displayName, description } = menuSchema;
    const modifyNodeProperty = useStore((s) => s.modifyNodeProperty);
    const selectedNode = useStore((s) => s.selectedNode);
    // Checks if the node has any user data
    const hasData = selectedNode.node._user_data[propName] !== null;
    const props = {
        onDownload(e) {
        },
        beforeUpload(e) {
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                setUploadedImage(info.file.originFileObj);
                // Important - stores image data
                modifyNodeProperty(nodeId, propName, info.file.originFileObj);
                message.success(`${info.file.name} file uploaded successfully`);

            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const [uploadedImage, setUploadedImage] = useState(null);
    return (
        <Card size="small" className="border-slate-600" style={{ width: 200, background: themeConstant.color_bg_container }}>
            <Upload {...props} accept="image/*"> {/* Use accept="image/*" to only allow image files */}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><Button icon={<UploadOutlined />}>{displayName}</Button></TooltipTrigger>
                        <TooltipContent>
                            {description}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                {hasData && <img src={URL.createObjectURL(selectedNode.node._user_data[propName])} alt="Uploaded" />}

            </Upload>
        </Card>
    )

}
export default AbstractImageUpload;