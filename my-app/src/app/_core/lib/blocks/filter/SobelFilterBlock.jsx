import FilterBlock from "@/app/_core/lib/blocks/filter/FilterBlock";


export default class SobelFilterBlock extends FilterBlock {
    constructor(id) {
        super({ id: id, label: "Sobel Filter Block", type: "filter_sobel", custom_user_data: { filter_size: "1", dx: "1", dy: "1" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return ["menu_filter_size_edge", "menu_derivative_magnitude_x", "menu_derivative_magnitude_y"]
    }


}