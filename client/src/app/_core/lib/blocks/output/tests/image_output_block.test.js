import ImageOutputBlock from "../ImageOutputBlock";

test("Image Output Block contruction", () => {
  const instance = new ImageOutputBlock("0");

  expect(instance).toHaveProperty("id", "0");
  expect(instance).toHaveProperty("label", "Image Output Block");
  expect(instance).toHaveProperty("type", "ResizableOutputNode");
  expect(instance).toHaveProperty("_type", "image_output");
  expect(instance).toHaveProperty("_user_data", {});
  expect(instance).toHaveProperty("dialog_schema");
  expect(instance).toHaveProperty("collapsible", false);
  expect(instance).toHaveProperty("_base_type", "output");
  expect(instance).toHaveProperty("data", {
    label: "Image Output Block",
    resizable: true,
  });
});

test("Image Output Block Dialog Schema", () => {
  const instance = new ImageOutputBlock("999");

  const dialogSchema = instance.getDialogSchema();

  expect(dialogSchema).toStrictEqual([""]);
});
