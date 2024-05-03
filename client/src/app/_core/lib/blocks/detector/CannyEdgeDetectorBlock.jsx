import DetectorBlock from "@/app/_core/lib/blocks/detector/DetectorBlock";

export default class CannyEdgeDetectorBlock extends DetectorBlock {
    constructor(id) {
        super({ id: id, label: "Canny Edge Detector Block", type: "detector_canny_edge", custom_user_data: { thresh1: "100", thresh2: "300" } })
        super.dialog_schema = this.getDialogSchema();

    }

    getDialogSchema() {
        return [
            {
                type: "slider",
                propName: "thresh1",
                displayName: "Threshhold 1",
                description: "First threshold for the hysteresis procedure.",
                min: 1,
                max: 1000
            },
            {
                type: "slider",
                propName: "thresh2",
                displayName: "Threshhold 2",
                description: "Second threshold for the hysteresis procedure.",
                min: 1,
                max: 1000
            },

        ]
    }

}