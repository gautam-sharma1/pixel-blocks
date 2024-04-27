"use client"
import App from "@/app/_core/ui/components/App";
import LeftSideMenu from "@/app/_core/lib/side_menu/LeftSideMenu";
import {ReactFlowProvider} from "reactflow";


import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SelectionMenuDispatcher from "@/app/_core/lib/selection_menu/SelectionMenuDispatcher";
const { Header, Content, Footer, Sider } = Layout;
import CompileButton from "@/app/_core/ui/components/CompileButton";
import OutputCanvas from "@/app/_core/lib/output/OutputCanvas";
import AppFooter from "@/app/_core/ui/components/AppFooter";
import AppHeader from "@/app/_core/ui/components/AppHeader";

const EntryPoint = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <ReactFlowProvider>
            <AppHeader/>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >

                        {/*Left menu*/}
                    <LeftSideMenu/>

                    {/*Main FLow App*/}
                    <Content
                        style={{
                            padding: '0 24px',
                            width:800,
                            minHeight: 280,

                            margin:'0'
                        }}
                    >

                            <App/>
                    </Content>
                    <div
                        style={{
                            textAlign: 'center',
                            background: colorBgContainer,
                        }}
                    >
                        <SelectionMenuDispatcher/>
                    </div>
                </Layout>
            </Content>

                <div className="flex items-center justify-center">
                    <CompileButton/>
                </div>

            <Content  style={{
                textAlign: 'center',
                background: colorBgContainer,
            }}>


                    <OutputCanvas/>
                    {/*</Layout>*/}

                </Content>
            <AppFooter/>
            </ReactFlowProvider>
        </Layout>

    );
};
export default EntryPoint;
