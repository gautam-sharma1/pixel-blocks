import React, { useEffect, useRef } from 'react';
import useStore from "@/app/_core/lib/State";
export default function OutputCanvas(){
    const outputURL = useStore((s)=> s.outputURL);
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas){
            const ctx = canvas.getContext('2d');

            // Create a new image object
            const img = new Image();

            // Set the onload function to draw the image onto the canvas once it's loaded
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image to fill the entire canvas
            };

            // Set the src attribute of the image object to the outputURL
            img.src = 'data:image/jpeg;base64,'+outputURL;
        }
    }, [outputURL]); // Trigger the effect whenever the outputURL changes
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
        <div className="flex justify-center items-center mt-12 ">
            {outputURL && <canvas className=" border-amber-950 border-8" ref={canvasRef} width={400} height={400} />}
        </div>

    )
};