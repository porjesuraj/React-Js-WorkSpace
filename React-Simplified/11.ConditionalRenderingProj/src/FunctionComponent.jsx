import { useState } from "react";

export default function FunctionComponent({age}){

    const[favorate,setfavorate] = useState(0);
  let jsx;
    if(age != null)
    {
        jsx = `Age is ${age}`
    }

    return(
        <>
        <h1>{age > 0 && age > 18 && `Person is adult`}  </h1>

        {age != null && age>0 ? <h1>age is{age} </h1>: <h2>please enter valid age</h2>}
        <br/>
        {jsx}
        </>
    )
}
