import React from 'react';
import {Layout} from "antd";
const { Header } = Layout;

const AppHeader = (props) => (
    <Header
        style={{
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <div className="demo-logo" />
        <div className="text-amber-50">Visual AI</div>
    </Header>
);

export default AppHeader;