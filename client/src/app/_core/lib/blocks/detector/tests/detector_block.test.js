import DetectorBlock from "../DetectorBlock";

test("Detector Block contruction", () => {
  const instance = new DetectorBlock({
    id: "0",
    label: "some_name",
    type: "some_detector",
    custom_user_data: {},
  });

  expect(instance).toHaveProperty("id", "0");
  expect(instance).toHaveProperty("label", "some_name");
  expect(instance).toHaveProperty("type", "ResizableNode");
  expect(instance).toHaveProperty("_type", "some_detector");
  expect(instance).toHaveProperty("_user_data", {});
  expect(instance).toHaveProperty("dialog_schema");
  expect(instance).toHaveProperty("collapsible", false);
  expect(instance).toHaveProperty("_base_type", "detector");
  expect(instance).toHaveProperty("data", {
    label: "some_name",
    resizable: true,
  });
});
