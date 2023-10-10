import React from "react";
export class CounterClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:"",
            age:0
        }
    }
    render() {
        return (
             
            <>
            <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
            <br/>
            <button onClick={() => this.setState({age: this.state.age + 1})}>+</button>{this.state.age}
            <button onClick={() =>{if(this.state.age == 0 ) return; this.setState({age: this.state.age - 1})}}>-</button>
            
                 <br/>
            
                <label> My Name is {this.state.name} and my age is {this.state.age}</label>   
                    </>  
        );
    }
}