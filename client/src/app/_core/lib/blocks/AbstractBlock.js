/* The AbstractBlock class is a JavaScript class representing a generic block element with various
properties and styling options. 

*/
export default class AbstractBlock {
  constructor({
    id,
    label,
    node_type,
    type,
    custom_user_data = {},
    collapsible,
    base_type,
  }) {
    this.id = id;
    this.type = node_type;
    this.label = label;
    this._type = type;
    this.data = { label: label, resizable: true };
    this.style = {
      border: "1px solid #777",
      padding: 10,
      fontSize: "10px",
      background: "#eee",
      border: "1px solid #555",
      borderRadius: "5px",
      textAlign: "center",
    };
    this.position = { x: 25, y: 25 };
    this._base_type = base_type;
    this._user_data = custom_user_data;
    this.dialog_schema = null;
    this.collapsible = collapsible;
  }
}
