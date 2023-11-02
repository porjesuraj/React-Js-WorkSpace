import React from "react"
import { ThemeContext } from "./App"

export class GrandChildClass extends React.Component{

  render(){

    return(<ThemeContext.Consumer>
      {
        ({isDarkmode,toggle}) =>(
          <button
   style={{
    backgroud: isDarkmode ?"White":"#333",
    color:isDarkmode?"#333": "White",
    border:"none",
    padding:".5em",
    borderRadius:".25em",
    cursor:"pointer",
   }}
   onClick={toggle}> Toggle Theme</button>
   )
      }
      
    </ThemeContext.Consumer>)
  }
    
}