import InputBlock from "../../input/InputBlock";

test("Input Block contruction", () => {
  const instance = new InputBlock({
    id: "0",
    label: "some_name",
    type: "image_input",
    custom_user_data: { image: null },
  });

  expect(instance).toHaveProperty("id", "0");
  expect(instance).toHaveProperty("label", "some_name");
  expect(instance).toHaveProperty("type", "ResizableInputNode");
  expect(instance).toHaveProperty("_type", "image_input");
  expect(instance).toHaveProperty("_user_data", { image: null });
  expect(instance).toHaveProperty("dialog_schema", null);
  expect(instance).toHaveProperty("collapsible", false);
  expect(instance).toHaveProperty("_base_type", "input");
  expect(instance).toHaveProperty("data", {
    label: "some_name",
    resizable: true,
  });
});
