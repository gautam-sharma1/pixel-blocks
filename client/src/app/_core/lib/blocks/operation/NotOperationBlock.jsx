import OperationBlock from "@/app/_core/lib/blocks/operation/OperationBlock";

export default class NotOperationBlock extends OperationBlock {
    constructor(id) {
        super({ id: id, label: "Bitwise Not Input Block", type: "operation_not", custom_user_data: {} })
        super.dialog_schema = this.getDialogSchema();

    }

    // Define dialog scheme here
    getDialogSchema() {
        return [{
            type: "",
            displayName: "Bitwise Not",
            description: "Calculates per-element bit-wise inversion of the input image",
            propName: "",
        }]
    }


}