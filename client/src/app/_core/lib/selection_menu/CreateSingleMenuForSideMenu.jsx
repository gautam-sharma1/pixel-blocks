
import { Card, Space } from 'antd';
import AbstractSlider from "@/app/_core/lib/actions/AbstractSlider";
import AbstractSelector from "@/app/_core/lib/actions/AbstractSelector";
import AbstractImageUpload from "@/app/_core/lib/actions/AbstractImageUpload";

export default function CreateSingleMenuForSideMenu({ nodeId, menuToRender }) {
    const renderMenu = (menuSchema) => {
        switch (menuSchema.type) {
            case "slider":
                return (<AbstractSlider nodeId={nodeId} menuSchema={menuSchema} />)
            case "selector":
                return (<AbstractSelector nodeId={nodeId} menuSchema={menuSchema} />)
            case "image_upload":
                return (<AbstractImageUpload nodeId={nodeId} menuSchema={menuSchema} />)
            default:
                return (<></>);
        }
    }
    return (

        renderMenu(menuToRender)

    )
}