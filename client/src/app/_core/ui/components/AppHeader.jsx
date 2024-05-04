import React from 'react';
import { Layout } from "antd";
import { Boxes } from '@/components/ui/background-boxes';
import { WavyBackground } from '@/components/ui/wavy-background';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Button } from "@/components/ui/button"

const { Header } = Layout;
import { Card }
    from
    "antd"
    ;

const AppHeader = (props) => (

    <Header
        style={{
            display: 'flex',
            alignItems: 'center',
            width: "full",
            height: "144px",
            maxHeight: "36vh",

        }}
    >

        {/* <div> */}

        {/* <div className="logo" /> */}
        <div className="h-36 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            {/* <BackgroundGradient> */}
            <Button className="bg-transparent hover:bg-inherit">
                <Boxes />
                <div className="z-50" style={{ fontSize: "48px" }}>
                    Pixel Blocks
                </div>

            </Button>
            {/* </BackgroundGradient> */}
        </div>

        {/* </div> */}

    </Header>

);

export default AppHeader;