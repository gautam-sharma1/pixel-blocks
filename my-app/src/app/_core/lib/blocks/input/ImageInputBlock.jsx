import InputBlock from "@/app/_core/lib/blocks/input/InputBlock";

export default class ImageInputBlock extends InputBlock{
    constructor(id) {
        super( {id:id ,label:"Image Input Block" , type:"image_input", })
        super.dialog_schema = this.getDialogSchema();

    }

    // Define dialog scheme here
    getDialogSchema() {
        return ["menu_image_upload"]
    }


}