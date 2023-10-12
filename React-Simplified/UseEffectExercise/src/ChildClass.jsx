import React from "react"

export class ChildClass extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            name:""
        }

        this.handleCLick = () =>{
            console.log(`name is ${this.state.name}`)
        }
    }

    componentDidMount(){
        console.log("Mount")
    }

    componentWillUnmount(){
        console.log("Unmount")
        document.removeEventListener("click",this.handleCLick)
    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.name != this.state.name){
            document.removeEventListener("click",this.handleCLick)
            document.addEventListener("click", this.handleCLick);
        }

    }

    render(){
      return  (<>
        <label>class</label>
        <input type="text" value={this.state.name} onChange={(e) =>this.setState({name: e.target.value})} />

<label>{this.state.name}</label>
        </>

    )}
}