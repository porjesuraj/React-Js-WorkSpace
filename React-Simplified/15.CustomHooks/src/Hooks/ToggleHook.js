import { useState } from "react";

export function useToggle(initialValue){

    const[value,setValue] = useState(initialValue);

    function toggle(){
      setValue(current => !current)
    }

    return[value,toggle]
  }
