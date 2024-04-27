import "./ContextMenu.css"
import CreateSingleMenu from "@/app/_core/lib/context_menu/CreateSingleMenu";
const contextMenuMap = new Map(
    [["image_input", ["image_upload"]],
         ["image_output", ["display"]]

])

export default function ContextMenuOptions({
                                               id,
                                               nodeType,
                                               top,
                                               left,
                                               right,
                                               bottom,
                                               ...props
                                           }){
    const contextMenuOptions = contextMenuMap.get(nodeType);
    return (
        <div
            style={{ top, left, right, bottom }}
            className="context-menu text-black"
            {...props}
        >
            {
                contextMenuOptions && contextMenuOptions.map((option,key)=>{
                    return (
                        <CreateSingleMenu key={key} nodeId={id} menuType={option}>{option}</CreateSingleMenu>
                    )
                })
            }
        </div>
    );
}