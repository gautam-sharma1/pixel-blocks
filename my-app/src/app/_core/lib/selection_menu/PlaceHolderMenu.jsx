import React from 'react';
import { Card, Space } from 'antd';
import CreateSingleMenuForSideMenu from "@/app/_core/lib/selection_menu/CreateSingleMenuForSideMenu";

export default function PlaceHolderMenu(){

    return(
        <Space direction="vertical" size={16}>
            <h2>Add a block</h2>
                <Card size="small"  style={{ width: 250 }}>
        </Card>
        </Space>
    )
}