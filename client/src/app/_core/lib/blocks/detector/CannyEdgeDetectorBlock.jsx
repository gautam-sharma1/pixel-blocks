import DetectorBlock from "@/app/_core/lib/blocks/detector/DetectorBlock";

export default class CannyEdgeDetectorBlock extends DetectorBlock {
    constructor(id) {
        super({ id: id, label: "Canny Edge Detector Block", type: "detector_canny_edge", custom_user_data: { thresh1: "100", thresh2: "300" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return ["menu_threshhold1", "menu_threshhold2"]
    }


}