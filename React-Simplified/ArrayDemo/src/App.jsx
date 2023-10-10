import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const INITIAL_VALUE=["A","B","C"];
 const[array,SetArray] = useState(INITIAL_VALUE)

 const[selected,SetSelected] = useState("");

 const[selectedText,SetSelectedText] = useState("");

 function HandleRemoveFirst(){
  SetArray((currentArray) => { return currentArray.slice(1)} )
 }

 function HandleRemoveSpecifiedElement(){
  SetArray((currentArray) => {return currentArray.filter((v) => v !== selected) })
 }

 function HandleAddSpecifiedElementStartOfArray(){
  SetArray((currentArray) => {return [selected, ...currentArray]})
 }

 function HandleAddSpecifiedElementEndOfArray(){
  SetArray((currentArray) => { return [...currentArray,selected]})
 }

 function HandleClearArray(){

  SetArray([]);
 }

 function HandleResetArray(){
  SetArray(INITIAL_VALUE);
 }

 function HandleChangeAtoSelected(){
  if(selectedText !== ""){
    SetArray((currentArray) => {
     return currentArray.map(v  => {
        if(v == "A")
           return selectedText.toUpperCase()
        
        return v;

      });
    });
  }
 }

 function HandleAddElementAtIndex(value, index){
  SetArray((currentArray) => {
    return [...currentArray.slice(0,index),"C",...currentArray.slice(index)]
  })
 }
  return (
    <>
   <label>{array.join(", ")} </label>
   
   <br/>
   <br/>
   <button onClick={HandleRemoveFirst} >Remove First Element</button>
<br/>
<input type='text' defaultValue={selected} onChange={(e)=>{SetSelected(e.target.value)}} />
<br/>
<label>Selected {selected}</label>
<br/>
<button onClick={HandleRemoveSpecifiedElement}>Remove the specified element</button>
<br/>
<button onClick={HandleAddSpecifiedElementStartOfArray}>Add the specified element to Start</button>
<br/>
<button onClick={HandleAddSpecifiedElementEndOfArray}>Add the specified element to End</button>
<br/>
<button onClick={HandleClearArray}>Clear the Array</button>
<br/>
<button onClick={HandleResetArray}>Reset the Array</button>

<br/>
<input type='text' defaultValue={selectedText} onChange={(e) =>{SetSelectedText(e.target.value)}} />
<br/>
<button onClick={HandleChangeAtoSelected}>Reset A to {selectedText}</button>

<br/>

<label> Add input Element At start of array</label>
<br/>
   <input type='text' value={selected} onChange={(e) => {SetSelected(e.target.value)}} />
   <br/>
   {/* <label> Add element at any index</label>
< button onClick={HandleAddElementAtIndex("C",1)}>Add Element at index 1</button> */}

    </>
  )
}

export default App
