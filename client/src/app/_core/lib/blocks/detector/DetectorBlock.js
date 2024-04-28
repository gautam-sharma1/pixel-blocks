export default class DetectorBlock {
  constructor({ id, label, type, custom_user_data }) {
    this.id = id;
    this.type = "ResizableNode";
    this.label = label;
    this._type = type;
    this.style = {
      border: "1px solid #777",
      padding: 10,
      fontSize: "10px",
      background: "#eee",
      border: "1px solid #555",
      borderRadius: "5px",
      textAlign: "center",
    };
    this.data = { label: label };
    this.position = { x: 25, y: 25 };
    this._base_type = "detector";
    this._user_data = custom_user_data;
    this.dialog_schema = null;
  }
}
