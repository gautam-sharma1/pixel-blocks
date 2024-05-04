import SelectionMenu from "@/app/_core/lib/selection_menu/SelectionMenu";
import useStore from "@/app/_core/lib/State";
import PlaceHolderMenu from "@/app/_core/lib/selection_menu/PlaceHolderMenu";
// type to menu options

export default function SelectionMenuDispatcher() {
    const selectedNode = useStore((s) => s.selectedNode);
    let hasMenus = false;
    let menus = null;
    if (selectedNode.type) {
        hasMenus = selectedNode.node.dialog_schema !== "";
        // get dialog schema
        menus = selectedNode.node.dialog_schema;
    }

    return (
        <>
            {
                hasMenus ? <SelectionMenu key={selectedNode.id} nodeId={selectedNode.id} menusToRender={menus} /> :

                    <></>
            }

        </>
    )
}