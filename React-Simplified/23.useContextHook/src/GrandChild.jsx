import { useContext } from "react"
import { ThemeContext } from "./App"

export function GrandChild(){

    const{isDarkmode,toggle} = useContext(ThemeContext)
    return(<>
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
    </>)
}