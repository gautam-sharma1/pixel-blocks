import DetectorBlock from "@/app/_core/lib/blocks/detector/DetectorBlock";

export default class HoughCircleDetectorBlock extends DetectorBlock {
    constructor(id) {
        // Theta is in degrees
        super({ id: id, label: "Hough Line Detector Block", type: "detector_hough_line", custom_user_data: { rho: "1", theta: "180", thresh: "100" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return ["menu_rho", "menu_theta", "menu_threshhold"]
    }


}