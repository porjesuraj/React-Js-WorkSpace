import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from './FunctionComponent'

function App() {
  const [count, setCount] = useState(0)

  const[items,setItems] = useState([
    {id:crypto.randomUUID(),name: "Item1"},
    {id:crypto.randomUUID(),name: "Item2"}
  ])

  function handleClick(){
    setItems((current) =>{
      return [{id:crypto.randomUUID(),name:"New Item"},...current]
    })
  }
  return (
    <>

    <button onClick={handleClick} >Add Item</button>
    <br/>

{
  //JSON.stringify(items)
  items.map((item) =>{
 return <Items key={item.id} item={item}/>
  })
}
    {/* <FunctionComponent age={19} /> */}
    </>
  )
}

function Items({item}){

  return ( 
  <React.Fragment>
  <label>{item.name}</label>
  <input />
  <br/>
</React.Fragment>)
}
export default App
