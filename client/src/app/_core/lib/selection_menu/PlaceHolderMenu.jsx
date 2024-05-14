import React from 'react';
import { Card, Space } from 'antd';
import CreateSingleMenuForSideMenu from "@/app/_core/lib/selection_menu/CreateSingleMenuForSideMenu";
import themeConstant from '../../themeConstants';
export default function PlaceHolderMenu() {

    return (
        <Space direction="vertical" size={16} style={{ background: themeConstant.color_bg_container }}>
            <h2>Add a block</h2>
            <Card size="small" style={{ width: 250, background: themeConstant.color_bg_container }}>
            </Card>
        </Space>
    )
}