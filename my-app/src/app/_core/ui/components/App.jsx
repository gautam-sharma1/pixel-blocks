import GraphController from "@/app/_core/ui/components/Controller";
import {useEffect} from "react";

export default function App(){

    // useEffect(()=>{
    //     const fetchData =          async()=> {
    //         fetch('http://127.0.0.1:5000', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             mode: 'cors', // Include CORS-related headers in the request
    //         }).then(()=>{
    //             console.log("resolved")
    //         })
    //     };
    //     fetchData();
    // },[]);

    return(
        <>
        <div  style={{height:800, border:"1px solid",pointerEvents: "auto" }}>
            <GraphController/>
        </div>
        </>
    )
}