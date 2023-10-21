import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useArray from './useArrayHook'

const INITIAL_ARRAY=[1,2,3]
function App() {
  const{array,set,push,replace,filter,remove,clear, reset} = useArray(INITIAL_ARRAY);

  return (
    <>

     <h2>{array.join(",")}</h2>
     <br/>
      <button onClick={() => set([4,5,6])}>Set to [4,5,6]</button>
      <br/>
      <button onClick={() => push(4)}>Push 4</button>
      <br/>
      <button onClick={() => replace(1,9)}>Replace the second element with 9</button>
      <br/>
      <button onClick={() => filter(3)}>Keep number less than 3</button>
      <br/>
      <button onClick={() => remove(1)}>Remove second element</button>
      <br/>
      <button onClick={() => clear()}> clear</button>
      <br/>
      <button onClick={() => reset(INITIAL_ARRAY)} > reset</button>


    </>
  )



}

export default App
