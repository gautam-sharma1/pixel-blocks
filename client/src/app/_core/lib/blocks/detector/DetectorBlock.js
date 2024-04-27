export default class DetectorBlock {
  constructor({ id, label, type, custom_user_data }) {
    this.id = id;
    this.type = "default";
    this.label = label;
    this._type = type;
    this.data = { label: label };
    this.position = { x: 25, y: 25 };
    this._base_type = "detector";
    this._user_data = custom_user_data;
    this.dialog_schema = null;
  }
}
