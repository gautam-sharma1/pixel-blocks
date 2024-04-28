
export default class InputBlock {
    constructor({ id, label, type, custom_user_data }) {
        this.id = id;
        this.type = "ResizableInputNode";
        this.label = label;
        this._type = type;
        this.data = { label: label, resizable: true };
        this.style = {
            border: '1px solid #777', padding: 10, fontSize: "10px",
            background: "#eee",
            border: "1px solid #555",
            borderRadius: "5px",
            textAlign: "center"
        };
        this.position = { x: 25, y: 25 };
        this._base_type = "input";
        this._user_data = custom_user_data;
        this.dialog_schema = null;
    }


}