
import OutBlock from "@/app/_core/lib/blocks/output/OutBlock";

export default class ImageOutputBlock extends OutBlock {
    constructor(id) {
        super({ id: id, label: "Image Output Block", type: "image_output", })
        super.dialog_schema = this.getDialogSchema();

    }

    // Define dialog scheme here
    getDialogSchema() {
        return [""]
    }


}