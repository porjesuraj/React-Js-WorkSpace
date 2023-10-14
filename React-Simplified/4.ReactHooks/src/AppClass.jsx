import React from "react"
import { CounterClass } from "./counter/CounterClass";

  
 export default class AppClass extends React.Component{

    constructor(props){
        super(props)
     this.state ={
        name: "suraj",
        age: 29,
        counter:0
     }
    }

    

    render()
    {
    const handleCouterClick =() =>
    {
        this.setState({counter:this.state.counter + 1})
    };

        return( <>
        <label>{this.state.name} {this.state.age}</label>
        <br/>
        <button onClick={handleCouterClick}> {this.state.counter}</button>

        <CounterClass/>
        </>)
    }
}