import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  //const[name, setName] = useState("");
const nameRef = useRef();
useEffect(() =>{
  console.log("Render")
})

function handleFormSubmit(e){

  const name = nameRef.current.value;
  e.preventDefault();

  if(name === "")
  {

  }else
  {
    alert(name);
  }
}

  return (
  <>
  <form onSubmit={handleFormSubmit}>
    <label htmlFor='input'>Name</label>
    {/* <input value={name} onChange={(e) => setName(e.target.value)}/> */}
    <input id="input" ref={nameRef} />
    <br/>
    <br/>
    <button>Alert Button</button>
  </form>
  </>
  
  )
}

export default App
