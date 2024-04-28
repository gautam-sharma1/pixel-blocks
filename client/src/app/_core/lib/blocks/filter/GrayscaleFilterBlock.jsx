import FilterBlock from "@/app/_core/lib/blocks/filter/FilterBlock";

export default class GrayscaleFilterBlock extends FilterBlock {
    constructor(id) {
        super({ id: id, label: "Grayscale Filter Block", type: "filter_grayscale", custom_user_data: { color_scheme: "rgb_to_gray" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return [{
            type: "selector",
            propName: "color_scheme", // should match the prop name in the constructor ^
            displayName: "Color Scheme",
            description: "Assumes the input image to be either in Red Green Blue (RGB) or Blue Green Red (BGR) channel format",
            selectors: [
                { text: "RGB to Gray", value: "rgb_to_gray" },
                { text: "BGR to Gray", value: "bgr_to_gray" },
            ]
        }]
    }


}