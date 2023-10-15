import React from "react"

export class ChildClass extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            name:"",
            age:0
        }

        this.handleCLick = () =>{
            console.log(`name is ${this.state.name}`)
        }
    }

    componentDidMount(){
        console.log("Mount")
        console.log("Hi")
        console.log("Render")
    }

    componentWillUnmount(){
        console.log("Unmount")
        document.removeEventListener("click",this.handleCLick)

        console.log("Bye")
        if(this.nameTimeout != null) clearTimeout(this.nameTimeout);
    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.name != this.state.name){
            document.removeEventListener("click",this.handleCLick)
            document.addEventListener("click", this.handleCLick);

            document.title = this.state.name;

            if(this.nameTimeout != null) clearTimeout(this.nameTimeout);
        this.nameTimeout =     setTimeout(() => {
                console.log("1second delay time is " + this.state.name)
            }, 1000);
        }


        if(prevState.name != this.state.name || prevState.age != this.state.age)
        {
            console.log(` My name is ${this.state.name} and age is ${this.state.age}`)
        }
        console.log("Render")

    }

    render(){
      return  (<>
        <label>class</label>
        <input type="text" value={this.state.name} onChange={(e) =>this.setState({name: e.target.value})} />


<label>{this.state.name}</label>

<br/>
        <button onClick={() => this.setState({age: this.state.age + 1})}>+</button>
         {this.state.age}
        <button onClick={() => this.setState({age: this.state.age - 1})} >-</button>
        <br/>

        <label> My name is {this.state.name} and age is {this.state.age}</label>
        </>

    )}
}