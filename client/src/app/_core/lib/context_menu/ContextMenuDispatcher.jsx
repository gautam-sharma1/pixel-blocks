import ContextMenuOptions from "@/app/_core/lib/context_menu/ContextMenuOptions";
export default function ContextMenuDispatcher({...props}) {

    return(
        <>
        <ContextMenuOptions {...props} />
        </>
    )
}