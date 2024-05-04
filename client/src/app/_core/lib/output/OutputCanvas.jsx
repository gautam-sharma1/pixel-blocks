import React, { useEffect, useRef } from 'react';
import Spinner from '@/app/_core/ui/components/Spinner';
import { Space } from 'antd';
import { WobbleCard } from '@/components/ui/wobble-card';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import useStore from "@/app/_core/lib/State";
export default function OutputCanvas() {
    const outputURL = useStore((s) => s.outputURL);
    const loading = useStore((s) => s.compileState);
    const error = useStore((s) => s.error);
    const canvasRef = useRef(null);
    const selectedNode = useStore((s) => s.selectedNode);
    // Checks if the node has any user data
    const hasData = selectedNode?.node?._user_data["image"];
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            if (!error) {
                const ctx = canvas.getContext('2d');

                // Create a new image object
                const img = new Image();

                // Set the onload function to draw the image onto the canvas once it's loaded
                img.onload = function () {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image to fill the entire canvas
                };

                // Set the src attribute of the image object to the outputURL
                img.src = 'data:image/jpeg;base64,' + outputURL;
            }

        }
    }, [outputURL, loading, error]); // Trigger the effect whenever the outputURL changes
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     console.log("canvas is", canvas)
    //     if(canvas){
    //     const ctx = canvas.getContext('2d');
    //
    //     const reader = new FileReader();
    //     reader.onload = function(event) {
    //         const img = new Image();
    //         img.onload = function() {
    //             ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image to fill the entire canvas
    //         };
    //         console.log("Img src is",event.target.result )
    //         // img.src = event.target.result;
    //         img.src = outputURL;
    //     };
    //     reader.readAsDataURL(outputURL); // Read the file as a data URL
    //     }
    // }, [outputURL]); // Trigger the effect whenever the imageUrl changes
    return (
        <Space direction="vertical" size={25} className="flex justify-center items-center mt-12 mb-48 w-full">
            {1 &&
                <>

                    {< h1 className="text-2xl"> Image Output</h1>}

                    <ResizablePanelGroup
                        direction="horizontal"
                        className="min-h-[200px] w-100 rounded-lg border-2 border-zinc-900 "
                    >
                        <ResizablePanel defaultSize={0}>
                            <WobbleCard
                                containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
                                className=""
                            >
                                <div className="flex h-full items-center justify-center p-6">

                                    {hasData && <img className="w-80 h-80" src={URL.createObjectURL(selectedNode?.node?._user_data["image"])} alt="Uploaded" />}
                                    {/* {<canvas className=" border-amber-950 border-2" ref={canvasRef} width={500} height={500} />} */}

                                </div>
                            </WobbleCard >
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={75}>
                            <WobbleCard
                                containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
                                className=""
                            >
                                <div className="flex h-full items-center justify-center p-6">

                                    {loading && <Spinner />}
                                    {<canvas ref={canvasRef} width={500} height={500} />}

                                </div>
                            </WobbleCard >
                        </ResizablePanel>


                    </ResizablePanelGroup>

                </>
            }
        </Space >
    )
};