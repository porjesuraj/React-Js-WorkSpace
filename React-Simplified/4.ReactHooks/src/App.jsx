import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './counter/counter'
import { CounterClass } from './counter/CounterClass'

function App() {
  const[name, setName] = useState("Suraj")
  const[age, setAge] = useState(29)
  const[person,setPerson] = useState({name:"Sur",age:30});
  const[counter, setCounter] = useState( () =>  1);

  function HandleDivClick(){
    setName(()=> {return "Raj"});
    setAge((currentAge)=>{return currentAge + 1});
    setCounter((currentCounter)=> currentCounter+1);
  }

  function handlePersonState(){
    setPerson({...person,name:"SunShine"});
  }
  return (
    <>
    <div onClick={HandleDivClick}>
    <h1>Hi {name}</h1>
   <h2> Your is {age}</h2>
   <h3>Refresh {counter}</h3>
  
    </div>

    <Counter/>
   
   <div>
    <label onClick={handlePersonState}>{person.name} {person.age}</label>
    <CounterClass/>
    
    <label>Input</label>
    <input defaultValue={name} />
    <input value={name} onChange={e => setName(e.target.value)} />
   </div>
    </>
   
  )
}

export default App
