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

const AppHeader = ({startTour}) => (

//         <div className="h-36 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
//             <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <div className="navbar bg-base-100">

              <div className="flex-1 ml-8">
                <BackgroundGradient>
                <a className="btn text-2xl rounded-full ">Pixel Blocks</a>
                </BackgroundGradient>
              </div>

              <div className="flex-none">

                <ul className="menu menu-horizontal px-1">
                  <li><Button onClick={startTour}>Start tour</Button></li>
                     <li><Button>Blog</Button></li>
                     <li><Button>Docs</Button></li>
{/*                   <li><Button>Link</Button></li> */}
                  <li>
                  </li>
                </ul>
              </div>

            </div>

);

export default AppHeader;