import React from "react";
import { useState } from "react";

export function Child(){

    const[age,setAge] = useState(0);

    console.log("Render Child")

    return(
        <>
        <input value={age} onChange={(e) => setAge(e.target.value)} />

<label>Age: {age}</label>
        </>
    )
}