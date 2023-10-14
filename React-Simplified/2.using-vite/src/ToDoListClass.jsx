import React from "react";

export class ToDoListClass extends React.Component{
    render() {
        return (
             <label> <input type="checkbox" defaultChecked={this.props.isComplete}/>
              {this.props.children}</label>
        );
    }
}