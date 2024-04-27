import FilterBlock from "@/app/_core/lib/blocks/filter/FilterBlock";

export default class BlurFilterBlock extends FilterBlock {
    constructor(id) {
        super({ id: id, label: "Blur Filter Block", type: "filter_blur", custom_user_data: { filter_size: "1" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return ["menu_filter_size_edge"]
    }


}