import RandomBlock from "@/app/_core/lib/RandomBlock";
export default function RandomBlockConcrete(id){
    return RandomBlock( {id:id ,label:"Random Block" , type:"random_random"})
}