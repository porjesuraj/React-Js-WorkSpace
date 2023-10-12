import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export function Child(props){

    const[name,setName] = useState("")
    const[age,setAge] = useState(0)


    useEffect(() => console.log("Render"))
    useEffect(() => console.log(`My name is ${name} and age is ${age}`),[name,age])
    useEffect(() => {console.log("Hi")
 return () =>{
    console.log("Bye")
 }
},[])

useEffect(() => {
    const timeout = setTimeout(() => {
        console.log(`name is ${name}`)
    }, 5000);

    return () =>{
        clearTimeout(timeout);
    }
},[name])
   useEffect(() =>{ document.title = name},[name])
    return(
        <>
        
        <input value={name} onChange={(e)=>setName(e.target.value)} />
<br/>
        <button onClick={() => setAge((current) => current + 1)}>+</button>
         {age}
        <button onClick={() => setAge((current)=> current - 1)} >-</button>
        <br/>

        <label> My name is {name} and age is {age}</label>


        </>
    )

}