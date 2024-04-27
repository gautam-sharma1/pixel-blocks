import ImageUpload from "@/app/_core/lib/actions/ImageUpload";
export default function CreateSingleMenu({menuType,nodeId}){
    const renderMenu = (menuType)=>{
        switch(menuType){
            case "image_upload":
                return (<ImageUpload nodeId={nodeId}/>)
            default:
                return (<></>);
        }
    }
    return(
        renderMenu(menuType)
    )
}