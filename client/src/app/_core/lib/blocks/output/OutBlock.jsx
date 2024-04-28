export default class OutBlock {
    constructor({ id, label, type }) {
        this.id = id;
        this.type = "ResizableOutputNode";
        this.label = label;
        this._type = type;
        this.style = {
            border: '1px solid #777', padding: 10, fontSize: "10px",
            background: "#eee",
            border: "1px solid #555",
            borderRadius: "5px",
            textAlign: "center"
        };
        this.data = { label: label, resizable: true };
        this.position = { x: 25, y: 25 };
        this._base_type = "output";
        this._user_data = {};
        this.dialog_schema = null;
    }


}