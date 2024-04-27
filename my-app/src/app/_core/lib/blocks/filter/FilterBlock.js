export default class FilterBlock {
  constructor({ id, label, type, custom_user_data }) {
    this.id = id;
    this.type = "default";
    this.label = label;
    this._type = type; // defines what kind of filter is this
    this.data = { label: label };
    this.position = { x: 25, y: 25 };
    this._base_type = "filter"; // defines base type
    this._user_data = custom_user_data;

    this.dialog_schema = null;
  }
}
