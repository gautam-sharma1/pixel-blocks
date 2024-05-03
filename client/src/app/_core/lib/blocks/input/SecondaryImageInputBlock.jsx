import InputBlock from "./InputBlock";

export default class SecondaryImageInputBlock extends InputBlock {
    constructor(id) {
        super({ id: id, label: "Secondary Image Input Block", type: "secondary_image_input", custom_user_data: { image: null } })
        super.dialog_schema = this.getDialogSchema();
        super.collapsible = true;
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