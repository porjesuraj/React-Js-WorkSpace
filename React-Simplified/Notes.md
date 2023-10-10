#  React Notes


## 1. Using create react app commend
1. TO create react app use 

````
 npx create-react-app app-name
````

2. cd to the app folder, and to run the app use
  ````
  npm start
  ```` 
 

3. to create a prod version of application use
````
 npm run build
````
 

4. to run the production build  use
````
npm install -g serve
serve -s build
````

### 5. to know what commend you can  run check package.json script section

## 2. Using vite to create react app 
1. create command
```
npm create vite@latest
``` 
2. command to install dependencies
```
 npm i
```
3. to run the app use
```
npm run dev
``` 
4. to build prod version 

```
npm run build
```
5. to run prod version as preview

```
npm preview
```


## JSX

1. Using html in jsx
 *  for html and style attributes contain - , we need to use camelcasing for attributes.
    +  i.e remove the dash and capitalize the next letter after dash 
    +  example for tab-index use tabIndex, background-color to backgroundColor
 * cant use class as attribute name in jsx, need to use 
    + for class use className  
 *   for "for" attribute need to use htmlFor
 *   for custom data attributes can use dash like data-attributename 
 *   In jsx for following values we get no UI output. 
     + null, undefined, false

```jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id='largeDiv' className='large'>
      <label htmlFor='numberInput'>Enter Number </label>
      <input id='numberInput' type='number' defaultValue={3}/>
      
     </div>
    </>
  )
}
```

2. how react creates element from jsx using createElement method

```jsx
 return
 React.createElement("h1",{id:5,className:'demoId'},"Hi")

 <h1 id="5">Hi</h1>
```

# Day 2

## 1. Components

1. Function Component
+ function name must be pascal casing.  
```jsx
export function ToDoList(){
    return(
        <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
            <li>Todo 4</li>
        </ul>
    )
}
```
+ use 
```jsx
import { ToDoList } from './ToDoList'
import './App.css'
import { ToDoListClass } from './ToDoListClass'
import { NameCLass } from './NameClass'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <label>ToDoList</label>
    <ToDoList/> 
   <ToDoListClass/>
   <NameCLass/>
   </>

  )
}

export default App

```

2. Class Component 

```jsx
import React from "react";

export class ToDoListClass extends React.Component{
    render() {
        return (
             <ul>
                <li>To do 1</li>
                <li>To do 2</li>
                <li>To do 3</li>
                <li>To do 4</li>
                <li>To do 5</li>
             </ul>
        );
    }
}
```

3. use of props to pass attributes to component 
+ for function component 
```jsx
// props deconstructed 
export function ToDoList({children,iscomplete}){
    return(
        <ul>
            <label>{children}
           <input type="checkbox" defaultChecked={iscomplete}/></label>
        </ul>
    )
}
Or
export function ToDoList({props}){
    return(
        <ul>
            <label>{props.children}
           <input type="checkbox" defaultChecked={props.iscomplete}/></label>
        </ul>
    )
}
```

+ for class
```jsx
import React from "react";

export class ToDoListClass extends React.Component{
    render() {
        return (
             <label> <input type="checkbox" defaultChecked={this.props.isComplete}/>
              {this.props.children}</label>
        );
    }
}
```

4. Declarative vs imperative

```jsx
export function Declarative({name, age}){
    return(
        <h1>{name} <span style={{color:"red"}}>{age}</span></h1>
    )
}


// imperative
const name = "suraj";
const age ="29";
const h1 = document.createElement("h1");


const span = document.createElement("span")


span.style.color= "red";

h1.append(span);
h1.innerText = name;
span.innerText = age;

```

5. importing non js files in jsx 
+ we can import image, json, css, etc using the import statement 
```jsx
import React, { useState } from 'react'
import'./style.css'
import user  from './user.json'
import react from './assets/react.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
   <label>{JSON.stringify(user)}</label>
   <img src={react}/>
   </>


  )
}
```

## Hooks 

### 1. UseState for Function component
+ use to set the current value /state of variable in jsx
```jsx
export function Counter(){

    const [counter, setCounter] = useState(0);

    function handleCounter()
    {
        setCounter(currentvalue =>{return currentvalue+1});
    };
    return(
        <>
        <h2 onClick={handleCounter}>Component Counter {counter}</h2>
        </>
    )
}
```
+  useState()
+ adding individual useState() for each variable, either setting direct value, or use function to set the value once per component cycle.
+ i.e value is set on page load once, and not on page refresh.

+ setVariable, set the value of the variable each time, On click or other event
+ to use current state for set, need to use arrow function and pass current state as parameter
+ else, the useState initial value is use for setVariable each time.
```jsx
function App() {
  const[name, setName] = useState("Suraj")
  const[age, setAge] = useState(29)
  const[counter, setCounter] = useState(0)

  function HandleDivClick(){
    setName(()=> {return "Raj"});
    setAge((currentAge)=>{return currentAge + 1});
    setAge(age+1);
    setCounter((currentCounter)=> currentCounter+1);
  }
  return (
    <>
    <div onClick={HandleDivClick}>
    <h1>Hi {name}</h1>
   <h2> Your is {age}</h2>
   <h3>Refresh {counter}</h3>
  
    </div>

    <Counter/>
   
    </>
   
  )
}

export default App

```

+ Setting state in one object using the deconstructor 
+ for setState, using the spread operator (...), so only value name after is changed, rest remain same.

```jsx
 const[person,setPerson] = useState({name:"Sur",age:30});
  function handlePersonState(){
    setPerson({...person,name:"SunShine"});
  }
  return (
     
   <div>
    <label onClick={handlePersonState}>{person.name} {person.age}</label>
   </div>
    
   
  )
}

export default App

```

### 2. UseState in class component
+ to set state in class component
+ need to use constructor to declare the variable and assign a state to them
+ then we need to use this.state to get the variable value 
+ and use this.setState to set the state for varaible
+ setState on changes the value of mentioned variable , rest remain unchanged
+ the constructor is only called once, so our initial state is only set once in component.


+ following is a class component with state set for counter
```jsx
import React from "react";

export class CounterClass extends React.Component{

    constructor(props){
        super(props)

        this.state={
            counter:0
        }
    }



    render() {

        const handleCounter = () =>{
            this.setState(currentstate =>{
                return {counter : currentstate.counter+1}
            })
        }
        return (
             <h1 onClick={handleCounter}>Counter value {this.state.counter}</h1>
        );
    }
}
```
+ following is an AppClass with example of state
```jsx
import React from "react"
import { CounterClass } from "./counter/CounterClass";

  
 export default class AppClass extends React.Component{

    constructor(props){
        super(props)
     this.state ={
        name: "suraj",
        age: 29,
        counter:0
     }
    }

    

    render()
    {
    const handleCouterClick =() =>
    {
        this.setState({counter:this.state.counter + 1})
    };

        return( <>
        <label>{this.state.name} {this.state.age}</label>
        <br/>
        <button onClick={handleCouterClick}> {this.state.counter}</button>

        <CounterClass/>
        </>)
    }
}
```


## INPUT EVENT

### 1. Controlled Input
+ when react handle the input change 
```jsx

    <input value={name} onChange={e => setName(e.target.value)} />
```
### 2. Uncontrolled Input
+ when browser handles the input change

```jsx
  <input defaultValue={name} />
```

## Array function 
Examples

```jsx

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
```
