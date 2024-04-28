import InputBlock from "@/app/_core/lib/blocks/input/InputBlock";

export default class ImageInputBlock extends InputBlock {
    constructor(id) {
        super({ id: id, label: "Image Input Block", type: "image_input", custom_user_data: { image: null } })
        super.dialog_schema = this.getDialogSchema();

    }

    // Define dialog scheme here
    getDialogSchema() {
        return [{
            type: "image_upload",
            displayName: "Upload Image",
            description: "Upload image to get started.",
            propName: "image",
        }]
    }


}