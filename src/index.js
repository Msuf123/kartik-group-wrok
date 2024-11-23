import { invertName } from "./functions.js"
document.addEventListener("DOMContentLoaded",function(){
    let inputElement=document.getElementById('inputName')
    let name=""
    inputElement.addEventListener("keydown",function(el){
   
        if(inputElement.value==""){
            
            name+=el.key
        }
        else{
       
        name=invertName(name+el.key)
    }
     console.log(name)
    })
})
