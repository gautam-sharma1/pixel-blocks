import FilterBlock from "@/app/_core/lib/blocks/filter/FilterBlock";

export default class GrayscaleFilterBlock extends FilterBlock {
    constructor(id) {
        super({ id: id, label: "Grayscale Filter Block", type: "filter_grayscale", custom_user_data: { color_scheme: "rgb_to_gray" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return ["menu_color_to_gray"]
    }


}