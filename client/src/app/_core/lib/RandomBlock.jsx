export default function RandomBlock({id, label, type}){
    return {
        id: id,
        type: "default",
        data: { label: label},
        position: { x: 25, y: 25 },
        _type:type
    }
}