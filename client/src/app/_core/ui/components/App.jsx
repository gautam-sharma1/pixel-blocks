import GraphController from "@/app/_core/ui/components/Controller";
import { useEffect } from "react";

export default function App() {

    return (
        <>
            <div style={{ height: 800, border: "1px solid", pointerEvents: "auto" }}>
                <GraphController />
            </div>
        </>
    )
}