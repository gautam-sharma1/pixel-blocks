import React from 'react';
import {useState} from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

import useStore from "@/app/_core/lib/State";

const ImageUpload = ({nodeId}) => {
    const modifyNodeProperty = useStore((s)=>s.modifyNodeProperty);
    const selectedNode = useStore((s)=>s.selectedNode);
    // Checks if the node has any user data
    const hasData = Object.keys(selectedNode.node._user_data).length > 0;
    const props = {
        onDownload(e){
        },
        beforeUpload(e){
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                setUploadedImage(info.file.originFileObj);
                // Important - stores image data
                modifyNodeProperty(nodeId,"image",info.file.originFileObj);
                message.success(`${info.file.name} file uploaded successfully`);

            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const [uploadedImage, setUploadedImage] = useState(null);
    return (
        <Upload {...props} accept="image/*"> {/* Use accept="image/*" to only allow image files */}
            <Button icon={<UploadOutlined />}>Click to Upload Image</Button>
            {hasData && <img className="w-80 h-80" src={URL.createObjectURL(selectedNode.node._user_data.image)} alt="Uploaded" />}

        </Upload>
        )

}
export default ImageUpload;