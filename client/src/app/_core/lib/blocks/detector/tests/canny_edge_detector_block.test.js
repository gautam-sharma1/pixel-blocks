import CannyEdgeDetectorBlock from "../CannyEdgeDetectorBlock";

test("Canny Edge Detector Block contruction", () => {
  const instance = new CannyEdgeDetectorBlock("101");

  expect(instance).toHaveProperty("id", "101");
  expect(instance).toHaveProperty("label", "Canny Edge Detector Block");
  expect(instance).toHaveProperty("type", "ResizableNode");
  expect(instance).toHaveProperty("_type", "detector_canny_edge");
  expect(instance).toHaveProperty("_user_data", {
    thresh1: "100",
    thresh2: "300",
  });
  expect(instance).toHaveProperty("dialog_schema");
  expect(instance).toHaveProperty("collapsible", false);
  expect(instance).toHaveProperty("_base_type", "detector");
  expect(instance).toHaveProperty("data", {
    label: "Canny Edge Detector Block",
    resizable: true,
  });
});

test("Canny Edge Detector Block Dialog Schema", () => {
  const instance = new CannyEdgeDetectorBlock("999");

  const dialogSchema = instance.getDialogSchema();

  expect(dialogSchema).toStrictEqual([
    {
      type: "slider",
      propName: "thresh1",
      displayName: "Threshhold 1",
      description: "First threshold for the hysteresis procedure.",
      min: 1,
      max: 1000,
    },
    {
      type: "slider",
      propName: "thresh2",
      displayName: "Threshhold 2",
      description: "Second threshold for the hysteresis procedure.",
      min: 1,
      max: 1000,
    },
  ]);
});
