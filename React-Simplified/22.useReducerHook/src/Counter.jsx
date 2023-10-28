import { useReducer, useState } from "react"

const ACTIONS = {
    DECREMENT:"DECREMENT",
    INCREMENT:"INCREMENT",
    RESET:"RESET",
    CHANGE_COUNTER:"CHANGE_COUNTER"

}
function reducer(state,action){

    switch(action.type){
        case ACTIONS.DECREMENT:
            return state - 1;
        case ACTIONS.INCREMENT:
            return state + 1;
        case ACTIONS.RESET:
            return 0;
        case ACTIONS.CHANGE_COUNTER:
            return state + action.payload.value;       
        default:
            return state;
    }
}
export function Counter({initialCount = 0}){

   // const[counter,setCounter] = useState(initialCount);
    const[counter,dispatch] = useReducer(reducer,initialCount);


    return(
        <>
        {/* <button onClick={() => setCounter(current => current - 1)}>-</button> */}
        <button onClick={() => dispatch({type:ACTIONS.DECREMENT})}>-</button>
        {counter}
        <button onClick={() => dispatch({type:ACTIONS.INCREMENT})}>+</button>
        {/* <button onClick={() => setCounter(current => current + 1)}>+</button> */}

        <br/>
        <br/>
        <br/>
        <button onClick={() => dispatch({type:ACTIONS.CHANGE_COUNTER,payload:{value: 5}})} >+5</button>
        <br/>
        <br/>
        <br/>
        <button onClick={() => dispatch({type:ACTIONS.RESET})} >reset</button>
        </>
    )
}