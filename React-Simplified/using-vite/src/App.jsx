import React, { useState } from 'react'
import { ToDoList } from './ToDoList'
import './App.css'
import { ToDoListClass } from './ToDoListClass'
import { NameCLass } from './NameClass'
import'./style.css'
import user  from './user.json'
import react from './assets/react.svg'
function App() {
  const [count, setCount] = useState(0)

  return (

  //  React.createElement("h1",{id:5,className:'demoId'},"Hi")

    // <h1 id="5">Hi</h1>
   /* <>
     <div id='largeDiv' className='large'>
      <label htmlFor='numberInput'>Enter Number </label>
      <input id='numberInput' type='number' defaultValue={3}/>
      
     </div>
    </>
    */
   <>
   <label>ToDoList</label>
   <ToDoList isComplete={false}>
    <span>Child </span>
    </ToDoList>
   <ToDoListClass isComplete={true}>
    Child Class
    </ToDoListClass>
    <Declarative name="surajp" age="25"/>
   {/* <NameCLass/> */}
   <label>{JSON.stringify(user)}</label>

   <img src={react}/>
   </>


  )
}
export function Declarative({name, age}){
  return(
      <h1>{name} <span style={{color:"red"}}>{age}</span></h1>
  )
}

export default App
