import AbstractBlock from "../AbstractBlock";
export default class OutBlock extends AbstractBlock {
    constructor({ id, label, type }) {
        super({ id, label, type, node_type: "ResizableOutputNode", base_type: "output", collapsible: false });


    }
}