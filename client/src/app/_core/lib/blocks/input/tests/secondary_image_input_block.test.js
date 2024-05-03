import SecondaryImageInputBlock from "../SecondaryImageInputBlock";

test("Secondary Image Input Block contruction", () => {
  const instance = new SecondaryImageInputBlock("101");

  expect(instance).toHaveProperty("id", "101");
  expect(instance).toHaveProperty("label", "Secondary Image Input Block");
  expect(instance).toHaveProperty("type", "ResizableInputNode");
  expect(instance).toHaveProperty("_type", "secondary_image_input");
  expect(instance).toHaveProperty("_user_data", { image: null });
  expect(instance).toHaveProperty("dialog_schema");
  expect(instance).toHaveProperty("collapsible", true);
  expect(instance).toHaveProperty("_base_type", "input");
  expect(instance).toHaveProperty("data", {
    label: "Secondary Image Input Block",
    resizable: true,
  });
});

test("Secondary Image Input Block Dialog Schema", () => {
  const instance = new SecondaryImageInputBlock("90909");

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
