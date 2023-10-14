import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  const [name, setName] = useState("")

  const[width,setWidth] = useState(window.innerWidth);

  const handler = () =>{
    setWidth(window.innerWidth);
  };
  useEffect(() =>{ window.addEventListener("resize", handler);
  console.log("mount")
  return() =>{
    window.removeEventListener("resize",handler )
    console.log("cleanup")
  }
},[])


  useEffect(() =>{ console.log("Mount")},[])

const handlerName = () =>{
  console.log("use Effect name " + name);
}

  useEffect(() =>{
    document.addEventListener("click", handlerName);
    console.log(" add name click")
    return() =>{
      document.removeEventListener("click",handlerName);
      console.log("name cleanup")
    }

    },[name])
// reference type name reference changes on each onchange
  const person = { name}

  useEffect(() => {console.log(person)},[person])
  return (
    <>
    <input value={name} onChange={(e) => setName(e.target.value) } />
 <br/>
    <label >{name}</label>

    <br/>
    <label>{width}</label>
  
    </>
  )
    
}

export default App
