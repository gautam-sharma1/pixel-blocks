import DetectorBlock from "@/app/_core/lib/blocks/detector/DetectorBlock";

export default class KmeansDetectorBlock extends DetectorBlock {
    constructor(id) {
        // Theta is in degrees
        super({ id: id, label: "K Means Detector Block", type: "detector_k_means", custom_user_data: { k: "4" } })
        super.dialog_schema = this.getDialogSchema();

    }


    getDialogSchema() {
        return [
            {
                type: "slider",
                propName: "k",
                displayName: "Number of clusters",
                description: "Number of clusters to split the set by.",
                min: 2,
                max: 20
            },
        ]
    }


}