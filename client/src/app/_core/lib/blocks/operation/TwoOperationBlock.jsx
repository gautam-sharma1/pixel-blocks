
import AbstractBlock from "../AbstractBlock";
export default class OperationBlock extends AbstractBlock {
    constructor({ id, label, type, custom_user_data }) {
        super({
            id,
            label,
            type,
            custom_user_data,
            node_type: "ResizableTwoInputNode",
            base_type: "operation",
            collapsible: false,
        });

    }

}