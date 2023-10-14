import { useState } from "react"

export function Counter(){

    const [counter, SetCounter]= useState("")
   const[name,SetName] = useState("")
   const[age,SetAge] = useState(0)


    return(
        <>
<input value={name} onChange={(e) => SetName(e.target.value)} />
<br/>
<button onClick={() => SetAge((currentAge) => currentAge + 1)}>+</button>{age}
<button onClick={() =>{if(age == 0 ) return; SetAge((currentAge) => currentAge - 1)}}>-</button>

     <br/>

    <label> My Name is {name} and my age is {age}</label>   
        </>
    )
} 