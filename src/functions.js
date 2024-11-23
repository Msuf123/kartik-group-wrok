import { counter } from "./counter"
export function invertName(input){
    let name=""
    counter()
    if(typeof input==="number"){
      input=input.toString()
    }
    if(input==null||input==undefined){
      return ""
    }
    for(let i=input.length-1;i>=0;i--){
     
      name+=input[i]
    }
    return name
  }
