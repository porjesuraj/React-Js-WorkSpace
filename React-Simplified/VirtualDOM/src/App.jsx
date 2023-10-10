import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Child } from './Child'

function App() {
  const [count, setCount] = useState(0)
const[name, setName] = useState("")

const[showHide,setShowHide] = useState(true);

const childComponent =showHide ? <Child/>:null;
console.log("Render App")
  return (
    <>

    <button style={{display:"block", margin:20}} onClick={() =>setShowHide((s) => !s)}>Show/Hide</button>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />

<label> Name = {name}</label> */}
 {/* <Child/> */}
 {childComponent}
    </>
  )
}

export default App
