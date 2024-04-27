export default class OutBlock{
    constructor({id, label, type}){
        this.id = id;
        this.type = "output";
        this.label = label;
        this._type = type;
        this.data= { label: label};
        this.position= { x: 25, y: 25 };
        this._base_type = "output";
        this._user_data = {};
        this.dialog_schema = null;
    }


}