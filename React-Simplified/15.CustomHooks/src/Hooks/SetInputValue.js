import { useState } from "react";

export function setInputValue(initalValue){

    const[value,setValue] = useState(initalValue);


    return{value, onChange : (e) =>{setValue(e.target.value); console.log(value)} }
  }
