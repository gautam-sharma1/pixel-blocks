import React from 'react';
import { Card, Space } from 'antd';
import CreateSingleMenuForSideMenu from "@/app/_core/lib/selection_menu/CreateSingleMenuForSideMenu";

export default function SelectionMenu({ nodeId, menusToRender }) {

    return (
        <Space direction="vertical" size={16}>
            {console.log("menustorender", menusToRender)}
            {menusToRender[0]?.propName ? (<h2>Properties</h2>) : (<div>{menusToRender[0].description}</div>)}
            {menusToRender[0] && menusToRender.map((menu, id) => {
                return <CreateSingleMenuForSideMenu key={id} nodeId={nodeId} menuToRender={menu} />
            })}
        </Space>
    )
}