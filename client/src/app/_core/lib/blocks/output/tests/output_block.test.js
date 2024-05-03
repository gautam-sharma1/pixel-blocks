import OutBlock from "../OutBlock";

test("Out Block contruction", () => {
  const instance = new OutBlock({
    id: "0",
    label: "some_name",
    type: "image_output",
    custom_user_data: { image: null },
  });

  expect(instance).toHaveProperty("id", "0");
  expect(instance).toHaveProperty("label", "some_name");
  expect(instance).toHaveProperty("type", "ResizableOutputNode");
  expect(instance).toHaveProperty("_type", "image_output");
  expect(instance).toHaveProperty("_user_data", {});
  expect(instance).toHaveProperty("dialog_schema", null);
  expect(instance).toHaveProperty("collapsible", false);
  expect(instance).toHaveProperty("_base_type", "output");
  expect(instance).toHaveProperty("data", {
    label: "some_name",
    resizable: true,
  });
});
