import ImageInputBlock from "../ImageInputBlock";

test("Image Input Block contruction", () => {
  const instance = new ImageInputBlock("0");

  expect(instance).toHaveProperty("id", "0");
  expect(instance).toHaveProperty("label", "Image Input Block");
  expect(instance).toHaveProperty("type", "ResizableInputNode");
  expect(instance).toHaveProperty("_type", "image_input");
  expect(instance).toHaveProperty("_user_data", { image: null });
  expect(instance).toHaveProperty("dialog_schema");
  expect(instance).toHaveProperty("collapsible", false);
  expect(instance).toHaveProperty("_base_type", "input");
  expect(instance).toHaveProperty("data", {
    label: "Image Input Block",
    resizable: true,
  });
});

test("Image Input Block Dialog Schema", () => {
  const instance = new ImageInputBlock("999");

  const dialogSchema = instance.getDialogSchema();

  expect(dialogSchema).toStrictEqual([
    {
      type: "image_upload",
      displayName: "Upload Image",
      description: "Upload image to get started.",
      propName: "image",
    },
  ]);
});
