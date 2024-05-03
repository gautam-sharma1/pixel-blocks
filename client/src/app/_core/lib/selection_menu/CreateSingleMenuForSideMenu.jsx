
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

            // case "menu_image_upload":
            //     return (<ImageUpload nodeId={nodeId} />)
            // case "menu_filter_size_edge":
            //     return (<FilterSizeEdge nodeId={nodeId} />)
            // case "menu_derivative_magnitude_x":
            //     return (<DerivativeMagnitudeX nodeId={nodeId} />)
            // case "menu_derivative_magnitude_y":
            //     return (<DerivativeMagnitudeY nodeId={nodeId} />)
            // case "menu_color_to_gray":
            //     return (<Color2Gray nodeId={nodeId} />)
            // case "menu_threshhold1":
            //     return (<Threshhold1 nodeId={nodeId} />)
            // case "menu_threshhold2":
            //     return (<Threshhold2 nodeId={nodeId} />)
            // case "menu_threshhold":
            //     return (<Threshhold nodeId={nodeId} />)
            // case "menu_theta":
            //     return (<Theta nodeId={nodeId} />)
            // case "menu_rho":
            // return (<Rho nodeId={nodeId} />)
            default:
                return (<Card size="small" className="border-amber-900" style={{ width: 200 }}>

                </Card>);
        }
    }
    return (

        renderMenu(menuToRender)

    )
}