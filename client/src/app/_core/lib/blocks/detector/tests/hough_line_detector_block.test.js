import HoughLineDetectorBlock from "../HoughLineDetectorBlock";

test("Hough Line Detector Block contruction", () => {
  const instance = new HoughLineDetectorBlock("101");

  expect(instance).toHaveProperty("id", "101");
  expect(instance).toHaveProperty("label", "Hough Line Detector Block");
  expect(instance).toHaveProperty("type", "ResizableNode");
  expect(instance).toHaveProperty("_type", "detector_hough_line");
  expect(instance).toHaveProperty("_user_data", {
    rho: "1",
    theta: "180",
    thresh: "100",
  });
  expect(instance).toHaveProperty("dialog_schema");
  expect(instance).toHaveProperty("collapsible", false);
  expect(instance).toHaveProperty("_base_type", "detector");
  expect(instance).toHaveProperty("data", {
    label: "Hough Line Detector Block",
    resizable: true,
  });
});

test("Hough Line Detector Block Dialog Schema", () => {
  const instance = new HoughLineDetectorBlock("999");

  const dialogSchema = instance.getDialogSchema();

  expect(dialogSchema).toStrictEqual([
    {
      type: "slider",
      propName: "rho",
      displayName: "Rho",
      description:
        "A line can be represented as rho = x cos(theta) + ysin(theta), where rho is the perpendicular distance from the origin to the line.",
      min: 1,
      max: 200,
    },
    {
      type: "slider",
      propName: "theta",
      displayName: "Theta",
      description:
        " A line can be represented as rho = x cos(theta) + ysin(theta), where theta is the angle formed by this perpendicular line and the horizontal axis measured in counter-clockwise.",
      min: 1,
      max: 360,
    },
    {
      type: "slider",
      propName: "thresh",
      displayName: "Threshhold",
      description: "Minimum points to consider a line.",
      min: 1,
      max: 250,
    },
  ]);
});
