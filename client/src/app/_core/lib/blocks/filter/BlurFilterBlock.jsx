import FilterBlock from "@/app/_core/lib/blocks/filter/FilterBlock";

export default class BlurFilterBlock extends FilterBlock {
    constructor(id) {
        super({ id: id, label: "Blur Filter Block", type: "filter_blur", custom_user_data: { filter_size: "1" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return [{
            type: "selector",
            propName: "filter_size",
            displayName: "Filter Size",
            description: "Size of the extended Sobel kernel; it must be 1, 3, 5, or 7.",
            selectors: [
                { text: "1x1", value: "1" },
                { text: "3x3", value: "3" },
                { text: "5x5", value: "5" },
                { text: "7x7", value: "7" }
            ]
        }]
    }



}