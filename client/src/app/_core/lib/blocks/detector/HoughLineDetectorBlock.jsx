import DetectorBlock from "@/app/_core/lib/blocks/detector/DetectorBlock";

export default class HoughLineDetectorBlock extends DetectorBlock {
    constructor(id) {
        // Theta is in degrees
        super({ id: id, label: "Hough Line Detector Block", type: "detector_hough_line", custom_user_data: { rho: "1", theta: "180", thresh: "100" } })
        super.dialog_schema = this.getDialogSchema();

    }

    // getDialogSchema() {
    //     return ["menu_rho", "menu_theta", "menu_threshhold"]
    // }

    getDialogSchema() {
        return [
            {
                type: "slider",
                propName: "rho",
                displayName: "Rho",
                description: "A line can be represented as rho = x cos(theta) + ysin(theta), where rho is the perpendicular distance from the origin to the line.",
                min: 1,
                max: 200
            },
            {
                type: "slider",
                propName: "theta",
                displayName: "Theta",
                description: " A line can be represented as rho = x cos(theta) + ysin(theta), where theta is the angle formed by this perpendicular line and the horizontal axis measured in counter-clockwise.",
                min: 1,
                max: 360
            },
            {
                type: "slider",
                propName: "thresh",
                displayName: "Threshhold",
                description: "Minimum points to consider a line.",
                min: 1,
                max: 250
            },

        ]
    }


}