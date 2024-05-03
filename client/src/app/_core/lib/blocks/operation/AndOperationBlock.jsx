import TwoOperationBlock from "@/app/_core/lib/blocks/operation/TwoOperationBlock";

export default class AndOperationBlock extends TwoOperationBlock {
    constructor(id) {
        // Result stores the image from Secondary image input block
        super({ id: id, label: "Bitwise And Input Block", type: "operation_and", custom_user_data: { result: null } })
        super.dialog_schema = this.getDialogSchema();

    }

    // Define dialog scheme here
    getDialogSchema() {
        return [{
            type: "",
            displayName: "Bitwise And",
            description: "Calculates per-element bit-wise inversion of the input image",
            propName: "",
        }]
    }


}