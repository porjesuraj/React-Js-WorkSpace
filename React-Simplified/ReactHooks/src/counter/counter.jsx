import { useState } from "react"

export function Counter(){

    const [counter, setCounter] = useState(0);

    function handleCounter()
    {
        setCounter(currentvalue =>{return currentvalue+1});
    };
    return(
        <>
        <h2 onClick={handleCounter}>Component Counter {counter}</h2>
        </>
    )
}