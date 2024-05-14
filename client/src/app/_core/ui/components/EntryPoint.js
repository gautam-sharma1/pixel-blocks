"use client";
import App from "@/app/_core/ui/components/App";
import LeftSideMenu from "@/app/_core/lib/side_menu/LeftSideMenu";
import { ReactFlowProvider } from "reactflow";

import React, { useRef, useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Tour,
  Button,
  Space,
  ConfigProvider,
} from "antd";
import SelectionMenuDispatcher from "@/app/_core/lib/selection_menu/SelectionMenuDispatcher";
const { Header, Content, Footer, Sider } = Layout;
import CompileButton from "@/app/_core/ui/components/CompileButton";
import OutputCanvas from "@/app/_core/lib/output/OutputCanvas";
import AppFooter from "@/app/_core/ui/components/AppFooter";
import AppHeader from "@/app/_core/ui/components/AppHeader";
import TopMenu from "@/app/_core/ui/components/TopMenu";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import themeConstant from "../../themeConstants";

const EntryPoint = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [open, setOpen] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const steps = [
    {
      title: "Add Image blocks",
      description: "Start by adding an Image Input Block.",
      target: () => ref1.current,
      arrow: true,
    },
    {
      title: "Change properties of blocks",
      description: "Use the right side menu to modify block parameters.",
      target: () => ref2.current,
      arrow: true,
    },
    {
      title: "Compile button",
      description: "Click on this button to compile the project.",
      target: () => ref3.current,
      arrow: true,
    },
    {
      title: "Output canvas",
      description: "Visualize the results in the output canvas.",
      target: () => ref4.current,
      arrow: true,
    },
  ];
  return (
    <Layout>
      <ReactFlowProvider>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: themeConstant.color_primary,
              borderRadius: 10,
              // Alias Token
              colorBgContainer: themeConstant.color_bg_container,
            },
          }}
        >
          <AppHeader startTour={setOpen} />
          <Content
            style={{
              padding: "0 48px",
              background: themeConstant.background,
            }}
          >
            <Layout
              style={{
                padding: "24px 0",
                background: themeConstant.background,
                borderRadius: borderRadiusLG,
              }}
            >
              <div ref={ref1}>
                <LeftSideMenu />
              </div>
              {/*Left menu*/}

              {/*Main Flow App*/}
              <Content
                style={{
                  padding: "0 24px",
                  paddingBottom: "2px",
                  background: themeConstant.background,
                  width: 800,
                  minHeight: 280,
                  margin: "0",
                }}
              >
                {/* <TopMenu /> */}
                <App />
              </Content>
              <div
                style={{
                  textAlign: "center",
                  background: themeConstant.background,
                  width: 210,
                }}
                ref={ref2}
              >
                <SelectionMenuDispatcher />
              </div>
            </Layout>
          </Content>

          <div
            className={cn(
              "flex items-center justify-center",
              themeConstant.background
            )}
            ref={ref3}
          >
            <CompileButton />
          </div>
          {/* <Separator className="my-4 border-solid border-2 border-zinc-900 max-w-fit" /> */}
          <Content
            style={{
              textAlign: "center",
              background: themeConstant.color_bg_container,
            }}
          >
            <div ref={ref4}>
              <OutputCanvas />
            </div>
            {/*</Layout>*/}
          </Content>
          <AppFooter />
          <Tour
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#00b96b",
                borderRadius: 2,

                // Alias Token
                colorBgContainer: "#f6ffed",
              },
            }}
            open={open}
            onClose={() => setOpen(false)}
            type="primary"
            steps={steps}
            arrow={true}
          />
        </ConfigProvider>
      </ReactFlowProvider>
    </Layout>
  );
};
export default EntryPoint;
