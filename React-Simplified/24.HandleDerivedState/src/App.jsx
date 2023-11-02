import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[items,setItems] = useState([1,2,3,4]);
 const [inputValue, setInputValue] = useState("");
 
 const filteredList = useMemo(() =>{
 return inputValue === "" ? items: items.filter(i => i < inputValue);
 },[items,inputValue])
  
  return (
 
    <>
    <label htmlFor='input'>Input</label>
    <input  id="input" type='number' value={inputValue} onChange={e => setInputValue(e.target.valueAsNumber)}/>

    <div >
      {filteredList.join(",")}
    </div>
    <br/>
    <br/>
   
   <button onClick={() => setItems(i => [...i,2.5])} >Add 2.5</button>
<br/>

<label>Test</label>
  <div> {import.meta.env.VITE_URL}
   {import.meta.env.PASSWORD}</div>
    </>
  )
}

export default App
