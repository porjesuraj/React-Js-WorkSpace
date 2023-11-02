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
## Counter Project

++ class 
```jsx
import React from "react";
export class CounterClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:"",
            age:0
        }
    }
    render() {
        return (
             
            <>
            <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
            <br/>
            <button onClick={() => this.setState({age: this.state.age + 1})}>+</button>{this.state.age}
            <button onClick={() =>{if(this.state.age == 0 ) return; this.setState({age: this.state.age - 1})}}>-</button>
            
                 <br/>
            
                <label> My Name is {this.state.name} and my age is {this.state.age}</label>   
                    </>  
        );
    }
}
```

++ function 

```jsx
import { useState } from "react"

export function Counter(){

    const [counter, SetCounter]= useState("")
   const[name,SetName] = useState("")
   const[age,SetAge] = useState(0)


    return(
        <>
<input value={name} onChange={(e) => SetName(e.target.value)} />
<br/>
<button onClick={() => SetAge((currentAge) => currentAge + 1)}>+</button>{age}
<button onClick={() =>{if(age == 0 ) return; SetAge((currentAge) => currentAge - 1)}}>-</button>

     <br/>

    <label> My Name is {name} and my age is {age}</label>   
        </>
    )
} 
```

## Virtual Dom 

+ Virtual dom is a javascript interpretion of DOM, that compares the changes, and updates the changes 
+ in function component, the whole function is rerendered
+ in case of class component, the render function is called and rendered

```jsx
function App() {
  const [count, setCount] = useState(0)
const[name, setName] = useState("")
console.log("Render App")
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />

<label> Name = {name}</label>
 <Child/>
    </>
  )
}

export function Child(){

    const[age,setAge] = useState(0);

    console.log("Render Child")

    return(
        <>
        <input value={age} onChange={(e) => setAge(e.target.value)} />

<label>Age: {age}</label>
        </>
    )
}
```

## Component life cycle

+ 3 stages 
1. Mount
2. Render/Rerender
+ happens only when there is state change in component
3. Unmount
+ removes the state and stored values
```jsx
function App() {
  const [count, setCount] = useState(0)
const[name, setName] = useState("")

const[showHide,setShowHide] = useState(true);

const childComponent =showHide ? <Child/>:null;
console.log("Render App")
  return (
    <>

    <button style={{display:"block", margin:20}} onClick={() =>setShowHide((s) => !s)}>Show/Hide</button>

 {childComponent}
    </>
  )
}

```
 ## Use Effect hook

 + used to add a side effect on state change to the page 
 + the effect can be any UI based property
+ syntax for useEffect hook is 
1. first parameter the method to be called when state changes
2. second parameter, array of state object, on whose change the effect is called
3. if second parameter is empty effect is called on component mounting.
```jsx
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

```
+ following are example of useEffect
```jsx
function App() {
  const [count, setCount] = useState(0)
 
  const [name, setName] = useState("")

  const[width,setWidth] = useState(window.innerWidth);

  const handler = () =>{
    setWidth(window.innerWidth);
  };
  // add effect to window
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
// add effect to the document
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
```

++ Use Effect Exercise

```jsx
export function Child(props){

    const[name,setName] = useState("")
    const[age,setAge] = useState(0)


    useEffect(() => console.log("Render"))
    useEffect(() => console.log(`My name is ${name} and age is ${age}`),[name,age])
    useEffect(() => {console.log("Hi")
 return () =>{
    console.log("Bye")
 }
},[])
// set timer for effect, to delay the log and what is being logged
useEffect(() => {
    const timeout = setTimeout(() => {
        console.log(`name is ${name}`)
    }, 5000);

    return () =>{
        clearTimeout(timeout);
    }
},[name])
   useEffect(() =>{ document.title = name},[name])
    return(
        <>
        
        <input value={name} onChange={(e)=>setName(e.target.value)} />
<br/>
        <button onClick={() => setAge((current) => current + 1)}>+</button>
         {age}
        <button onClick={() => setAge((current)=> current - 1)} >-</button>
        <br/>

        <label> My name is {name} and age is {age}</label>


        </>
    )

}
```

## Class Component Lifecycle and how to make changes as per state change
+ we have 3 method to access class mount, update and unmount life cycle event

1. componentDidMount()
2. componentDidUpdate(prevProps,prevState)
3. componentWillUnmount()
+ following are the examples
```jsx
export class ChildClass extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            name:""
        }

        this.handleCLick = () =>{
            console.log(`name is ${this.state.name}`)
        }
    }

    componentDidMount(){
        console.log("Mount")
    }

    componentWillUnmount(){
        console.log("Unmount")
        document.removeEventListener("click",this.handleCLick)
    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.name != this.state.name){
            document.removeEventListener("click",this.handleCLick)
            document.addEventListener("click", this.handleCLick);
        }

    }

    render(){
      return  (<>
        <label>class</label>
        <input type="text" value={this.state.name} onChange={(e) =>this.setState({name: e.target.value})} />

<label>{this.state.name}</label>
        </>

    )}
}
```

+ how to make changes like useEffect in class based component

```jsx
import React from "react"

export class ChildClass extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            name:"",
            age:0
        }

        this.handleCLick = () =>{
            console.log(`name is ${this.state.name}`)
        }
    }

    componentDidMount(){
        console.log("Mount")
        console.log("Hi")
        console.log("Render")
    }

    componentWillUnmount(){
        console.log("Unmount")
        document.removeEventListener("click",this.handleCLick)

        console.log("Bye")
        if(this.nameTimeout != null) clearTimeout(this.nameTimeout);
    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.name != this.state.name){
            document.removeEventListener("click",this.handleCLick)
            document.addEventListener("click", this.handleCLick);

            document.title = this.state.name;

            if(this.nameTimeout != null) clearTimeout(this.nameTimeout);
        this.nameTimeout =     setTimeout(() => {
                console.log("1second delay time is " + this.state.name)
            }, 1000);
        }


        if(prevState.name != this.state.name || prevState.age != this.state.age)
        {
            console.log(` My name is ${this.state.name} and age is ${this.state.age}`)
        }
        console.log("Render")

    }

    render(){
      return  (<>
        <label>class</label>
        <input type="text" value={this.state.name} onChange={(e) =>this.setState({name: e.target.value})} />


<label>{this.state.name}</label>

<br/>
        <button onClick={() => this.setState({age: this.state.age + 1})}>+</button>
         {this.state.age}
        <button onClick={() => this.setState({age: this.state.age - 1})} >-</button>
        <br/>

        <label> My name is {this.state.name} and age is {this.state.age}</label>
        </>

    )}
}
```

## Strict Mode

+ in main.jsx we register our react app component to html
+ here we use StrictMode, that runs in debug mode run dev mode
+ strict mode, mount and unmount your component, so we are aware if there are any bugs/side effect in application
+ as all useEffect and component function are runned, on mount and unmount, we can pick up issues with component, easily
+ it only runs in dev env, and not in production, so no performance issue arise

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

## Fetch API

+ use fetch api in useEffect to get data from api
+ to avoid running multiple request, use abortcontroller 
+ set state for loading, data and error so user knows what going on 

```jsx
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //https://jsonplaceholder.typicode.com/users

const[user,setUser] = useState();
const[error,setError] = useState();

const[loading,setLoading] = useState(true);

const abortController = new AbortController();
 useEffect(()=>{
  setError(undefined);
  setLoading(true);

  fetch("https://jsonplaceholder.typicode.com/users",{signal:abortController.signal}).then(
    res => 
   {
    if(res.status === 200)
    {
     return res.json()
    }
    else{
       return Promise.reject(res)
    }
  }).then(
    res => {
      setUser(res);
      console.log("user");
    }

  ).catch(e => {
  
    if(e?.name === "AbortError") return;
    
    setError(e);
    console.log("Error" + e);
  
  })
  .finally(() =>{
    setLoading(false);
  })

  return(() =>{
    abortController.abort();
  })
 },[])

 let jsx = null;
 if(loading)
 {
jsx = <h1>Loading...</h1>
 }
else{
  jsx = <h1>{JSON.stringify(user)}</h1>
 }



  return (
    <>
    {jsx}
    </>
  )
}

export default App

```

## Conditional rendering 

+ our UI can be rendered based on the state value , in following ways

+ App
```jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FunctionComponent age={19} />
    </>
  )
}
```
+ func comp
```jsx
import { useState } from "react";

export default function FunctionComponent({age}){

    const[favorate,setfavorate] = useState(0);
  let jsx;
    if(age != null)
    {
        jsx = `Age is ${age}`
    }

    return(
        <>
        <h1>{age > 0 && age > 18 && `Person is adult`}  </h1>

        {age != null && age>0 ? <h1>age is{age} </h1>: <h2>please enter valid age</h2>}
        <br/>
        {jsx}
        </>
    )
}

```

+ Looping items in react

```jsx
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
    </>
  )
}

function Items({item}){

  return ( 
  <div>
  <label>{item.name}</label>
  <input />
  <br/>
</div>)
}
export default App

```    

### React Fragments
 + this  are empty container we add when we dont want to add div to a component
```jsx
<>
<input/>
<button/>
</>
```
+ we can use fragment when creating list, there we need to define the key, and that can be done by
```jsx
{
items.map((item) =>{
<React.Fragment key={item.id}>
  <label>{item.name}</label>
  <input />
  <br/>
</React.Fragment>
 });
}
```

## User List Project
+ fetch users from api and add to list with loading screen
```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { Fragment } from 'react'

function App() {

const[users,setUsers] = useState([]);
const[error,setError] = useState("");
const[loading,setLoading] = useState(true);

const controller = new AbortController();
useEffect(() =>{
setLoading(true);  
fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal,}).
then((res) =>{
  if(res.status === 200){
    return res.json()
  }else{
    Promise.reject(res);
  }
}).
then( setUsers).catch((e) => {
  if(e?.name === "AbortError") return;
  setError("Error")
}).finally(() =>{
  setLoading(false)
})

return(() =>{
 // controller.abort();
})},[]);


return (
    <> 
      <h1>User List</h1>

<ul>{loading ? <h2>Loading ...</h2> : users != null ? 
(users.map((user) =>{   
return <Users key={user.id} user={user}/>
})
)
:"Error"}</ul>
    
    </>
  )
}

function Users({user}){
  return(
       
    <>
    <li>{user.name} <br/></li>

    </>
  )
}
export default App

```

## Spread Operator in props 

+ we can use ... to get all values in object, in props . 
+ i.e we can deconstruct the object using spread operator
```jsx
return (
    <> 
 <Users key={user.id} {...user}/>
    </>
  )
}


function Users({name, email}){
  return(     
    <>
    <li>{name}  {email} </li>
    
    </>
  )
}
```

## Render Raw HTML
+ if we need to pass html in component can use dangerouslySetInnerHTML to pass custom html
+ but it exposes the web page to cross site scripting attack.
+ i.e adding srcipt to our inner html , so never pass input in custom html
```jsx
const CustomHTML = `
<h1> Cross Site Script Attack!!!</h1>
`

return(
  <div dangerouslySetInnerHTML={{__html:CustomHTML }}>
      </div>
)
```

## Todo List Project
+ includes how to created component and pass function as props 

```jsx
import TodoItemList from './TodoItemList'

function App() {
  const[itemList,setItemList] = useState([]);
  const[input,setInput] = useState("");
  function handleAddClick(){
    if(input !== ""){

      setItemList((current) => [...current,{id:crypto.randomUUID(),name:input,completed:false}]);
      console.log(itemList);
    }
  else{
    alert("please enter valid input")
     }
    }

    function handleDeleteClick(itemKey){

      setItemList((current) => {
       return current.filter(todo => todo.id !== itemKey);
      })
    }

    function toggleCheckbox(itemId,completed) {

      setItemList(current =>{
return current.map((todo) =>{
  if(todo.id === itemId)
  {
    return {...todo,completed};
  }
  else{
    return todo;
  }
});
       
      })
    }
  return (
    <>
     <ul id="list">
     {
       itemList != null ? itemList.map((item) => {
       
     return  <TodoItemList {...item} key={item.id} toggleCheckbox={toggleCheckbox} handleDeleteClick={handleDeleteClick}/>
    
       }): null
     }  </ul>
     

    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" defaultValue={input} onChange={(e) => setInput(e.target.value) } />
      <button onClick={handleAddClick}>Add Todo</button>
    </div>
    </>
  )
}

export default App

```

+ Todo component
```jsx
export default function TodoItemList({id,name,completed,toggleCheckbox, handleDeleteClick}){

    return(
        <li className="list-item">
        <label className="list-item-label" >
          <input type="checkbox" data-list-item-checkbox checked={completed} onChange={(e) => toggleCheckbox(id,e.target.checked)}  />
          <span data-list-item-text>{name}</span>
        </label>
        <button data-button-delete onClick={() => handleDeleteClick(id)}>Delete </button>
      </li>
    )
}
```

## Hook Rules

1. Hooks cannot be called conditionally and outside body of  function component
```jsx
function App(){

  const[count,setCount] =useState()
//1. Get Error
  if(count > 5){
    useEffecr(() =>{

    })
  }
  //2. after hook
   if(count > 5) return "hi"

   return(<>
   </>)
}

```
2. conditional render must be after hook
3. hooks can be called in body of function component and custom hooks.



### 1. useRef Hook in function comp

+ useRef usecase
1.  used to store data, between render, that does not cause the component to re render, when it changes 
```jsx
function App(){

  const nameRef = useRef("Suraj");
  console.log(nameRef.current);
  nameRef.current = "Raj";
}
```
2. useRef can be used  to get reference for html, as every html tag have a ref attribute 
```jsx
function App(){
  const inputRef = useRef();

useEffect(() =>{
  inputRef.current.focus()
},[]);

  return(<>
  <input ref={inputRef} >
  </>)
}

```
### 2. useRef in class comp

1. in class, if we want to set a property and not want it to rerender the component, need to set the property on class this value
2. to useRef in class component
```jsx
class App extends React.Component{

constructor(props){
  super(props);

  this.valueToSet = 7
  //2. useRef in class
  this.inputRef = React.createRef();
}

componentDidMount(){
  this.inputRef.current.focus()
}


render(){
//1. no re render happens for this.
 return(
  <>
  {this.valueToSet = 8}
   return(<>
  <input ref={inputRef} >
  </>)
  </>

 ) 
}

}
```

### 2. useMemo 
+ this hook is specifically for performance gain, here we set a property, on whose change, we perform a  memory intensive task.
+ it is same as useEffect but for performance gain.
+ if web response has slowed down, then we can use this hook.
```jsx
import { useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const LIST = Array(1_000_000).fill()
.map((_,i) => i+1);
function App() {
  const [count, setCount] = useState(0)
  const[query,setQuery] = useState("");
  const[isDarkMode,setIsDarkMode] = useState(false);

  const inputRef = useRef();
    useEffect(() =>{
 //   inputRef.current.focus();
  })

  const filteredList = useMemo(() =>{
   return LIST.filter(n => n.toString().includes(query));
  },[query])
  

  console.log(filteredList.length)


  function inputChange(value){
    setCount(value);
     console.log(inputRef.current)
  }
  return (
    <>
<div style={{
  background:isDarkMode?"#333" :"White",
  color:isDarkMode ? "White":"#333",

}}>

<label>Query:
<br/>
  <input value={query} onChange={e => setQuery(e.target.value)}/>
</label>
<br/>
 <input ref={inputRef} value={count}  onChange={(e) =>inputChange(e.target.value) } />
<br/>
 <label>

  <input type='checkbox' checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} />
  Dark Mode
 </label>
 <br/>
</div>

   
    </>
  )
}

export default App

```
### 3. useCallback 

+ use to memorized the function
+ so only when function changes due to state change, effect is called
+ as using a function directly in component, leads to function being rendered each time component renders.
```jsx
const printName = useCallback(() =>{
    console.log(isDarkMode);
  },[isDarkMode])

  useEffect(() =>{
    printName();
  },[printName])
```

## Custom Hook

1. We can set custom hooks, as function containing avaliable hooks, to generalize a process, like setting input value , toggle a value

2. Set Input value hook and toggle value hook
3. best practice to define hook in separate file.
```jsx
function App() {

// custom hook for setting input value
 // const [name,setName] = useState("");
 const nameInput = setInputValue("");

 //custom hook for toggle 
  const[isDarkMode,toggleDarkMode] = useToggle(false);
  //useState(false);

  return (
    <>
    <div style={{
      background: isDarkMode ? "#333": "White",
      color: isDarkMode ?"white":"black"
    }}>
<label> Name :</label>
<br/>
   {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <input {...nameInput} />
        <br/>
        {/* <input type='checkbox' checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} /> */}
      <br/>
      <button  onClick={toggleDarkMode} style={{background:"Grey",display:'-ms-flexbox',}}>Toggle Darkmode</button>
      <br/>

    </div>
     
    </>
  )
//custom hook 
function setInputValue(initalValue){

    const[value,setValue] = useState(initalValue);


    return{value, onChange : (e) =>{setValue(e.target.value); console.log(value)} }
  }

  
}
//custom hook
function useToggle(initialValue){

    const[value,setValue] = useState(initialValue);

    function toggle(){
      setValue(current => !current)
    }

    return[value,toggle]
  }

export default App

```

## 1. Fetch using custom hook project
+ create custom hook to fetch data , with loading and error state
```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
}


 const OPTIONS = {
   method: "POST",
   body: JSON.stringify({ name: "Suraj" }),
   headers: {
     "Content-type": "application/json",
   },
 }

function App() {
  const [url, setUrl] = useState(URLS.USERS,OPTIONS)

  const {data, isLoading, isError} = useFetch(url)
  // BONUS:
  // const { data, isLoading, isError } = useFetch(url, OPTIONS)

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  )


  function useFetch(url,options={}) {

    const[data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const[isError,setIsError] = useState(false); 

    useEffect(() =>{

      setData([]);
      setIsError(false);
      setIsLoading(true);

      const controller = new AbortController();
      fetch(url,{signal:controller.signal,...options}).then(res =>{
        if(res.status === 200){
          return res.json()
        }else{
         Promise.reject(res);
        }
      }).then(setData).catch((e) => {
        if(e?.name === "AbortError") return;
        console.log(e); setIsError(true)}).
      finally(() => {
        if(controller.signal.aborted) return;
           setIsLoading(false);
        console.log(data);
      
      })
      
      return(() =>{
        controller.abort();
      })
  }    ,[url])

  return {data,isLoading,isError}
  }
}
export default App


```

## 2. Array Custom Hook

+ custom hook class
```jsx
import { useCallback, useState } from "react"

export default function useArray(init){
    const[array,setArray] = useState(init)
  
    const set = useCallback((selectedArray  = []) => {
      
        setArray(current => {
          return selectedArray
        })
      },[]);
    const push = useCallback((selectedNumber) => {
        setArray((current) => [...current,selectedNumber])
      },[]);
  
    const replace = useCallback((index,value) => {
        setArray(current =>{
        // return current.map((_,i) =>{
        //   if(i === index){
        //     return value;
        //   }
        //   return _; })
        return[...current.slice(0,index),value,...current.slice(index+1)];
    
    })
      },[])
  
    const filter = useCallback((value) =>{
  
        setArray(current => current.filter(v => v < value))
       },[])
  
    const remove = useCallback((index) =>{
  
        setArray(current => [...current.slice(0,index),...current.slice(index+1)])
      },[])
  
    const clear = useCallback(() =>{
        setArray([])
      },[])
  
    const reset = useCallback((init)=>{
        setArray(init);
      },[])
  
    return{array,set,push,replace,filter,remove,clear,reset}
  }
```

+ App class
```jsx
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

```
## 3. use Local storage Hook

```jsx
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "")

  // Bonus:
   const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
     return "Default"
   })

  // Bonus:
   const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
     "Programming",
    "Weight Lifting",
  ])

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <br/>
        {firstName}
      </div>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <br/>
        {lastName}
      </div> 

      
       <div>{hobbies.join(",")}</div>
      <button
        onClick={() =>
          setHobbies(currentHobbies => [...currentHobbies, "New Hobby"])
        }
      >
        Add Hobby
      </button> 
    </>
  )

  function useLocalStorage(key,initialValue ){

    const[value,setValue] = useState(() =>{
      const localValue = localStorage.getItem(key);
      if(localValue == null){
        if(typeof(initialValue) === "function" )
        return initialValue()
        else 

        return initialValue;
      } else
          return JSON.parse(localValue);
    });

     useEffect(() =>{
      if(value == undefined)
        localStorage.removeItem(key)
       localStorage.setItem(key,JSON.stringify(value))
     },[value])

    
    return [value,setValue ]
  }
}

export default App


```

## Adding forms in react

```jsx

function handleAddClick(e){
   //prevent page refresh on form submit
   e.preventDefault()
    }
return(
  <>
<form onSubmit={handleAddClick} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" defaultValue={input} onChange={(e) => setInput(e.target.value) } />
      <button>Add Todo</button>
      <textarea defaultValue="test"></textarea>
      <select defaultValue="3">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </form>
    </>
)
```

## React One way dataflow

1. in react, data/states always flow from parent to child component
2. so if we want our child component to change state, we need to pass a function to the parent, that can make the change happen.
3. for example in case of todolist, we want to toggle and delete todo, so here we have

```jsx
//passing toggle and delete as function to be used by App
export default function TodoItemList({id,name,completed,toggleCheckbox, handleDeleteClick}){

    return(
        <li className="list-item">
        <label className="list-item-label" >
          <input type="checkbox" data-list-item-checkbox checked={completed} onChange={(e) => toggleCheckbox(id,e.target.checked)}  />
          <span data-list-item-text>{name}</span>
        </label>
        <button data-button-delete onClick={() => handleDeleteClick(id)}>Delete </button>
      </li>
    )
}

App

return  (<TodoItemList {...item} key={item.id} toggleCheckbox={toggleCheckbox} handleDeleteClick={handleDeleteClick}/>)

```

4. Using useRef instead of useState help, in case 
+ we want the reference value, and not interested in onChange, of value for forms

```jsx
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

```

## Form Validation Project
+ create login page with validation to input email and password on submit button and on text changenpm
+ validation 

```jsx

export function checkEmail(email){

const error = [];

if( email === "") 
{
    error.push("Required \n")
}else if(!email.endsWith("@gmail.com"))
{
    error.push("Email must end with @gmail.com \n")
}
    return error;
}

export function checkPassword(password){

    const error = [];
    if(password.length < 10){
        error.push("Password must be atleast 10 character \n")
    }else if(!password.match(/[A-Z]/)){
        error.push("must have atleast 1 Upper case letter \n")
    }else if(!password.match(/[a-z]/)){
        error.push("must have atleast 1 Lower case letter \n")
    }else if(!password.match(/[0-9]/)){
        error.push("must have atleast 1 number \n")
    }

    return error;
}

```
+ using useRef
```jsx
import { useRef, useState } from "react";
import { checkEmail, checkPassword } from "./validators";

function RefForm() {
    const email = useRef();
    const [emailErrorMessage, setemailErrorMessage ]= useState("");
    const password = useRef();
    const [passwordErrorMessage,setPasswordErrorMessage] = useState("")
    const[isFirstSubmitDone,setisFirstSubmitDone] = useState(false);
    
  function handleSubmit(e){
    e.preventDefault();
  
    setisFirstSubmitDone(true);
    const emailErrors = checkEmail(email.current.value);
  
    const passwordErrors = checkPassword(password.current.value);
  
    setemailErrorMessage(emailErrors);
    setPasswordErrorMessage(passwordErrors);
  
    if(emailErrors.length === 0 && passwordErrors.length === 0){
      alert("Success")
    }
  }
    return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailErrorMessage.length > 0 ? "error":""}`}>
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" id="email"  ref={email}
          onChange={(e)=> isFirstSubmitDone? setemailErrorMessage(checkEmail(e.target.value)): undefined}
          />
          <div className="msg" >{ emailErrorMessage !== ""? emailErrorMessage:null }</div>
        </div>
         <div className={`form-group ${passwordErrorMessage.length>0 ? "error":""}`}>
          <label className="label" htmlFor="password">Password</label>
          <input
  
            className="input"
            ref={password}
            type="password"
            id="password"
            onChange={(e) => isFirstSubmitDone? setPasswordErrorMessage(checkPassword(e.target.value)):undefined}
          />
          <div className='msg'>{passwordErrorMessage !== ""? passwordErrorMessage:null}</div>
        </div> 
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
    )
  }
  
  export default RefForm
  
```
+ using useState
```jsx
import { useMemo, useRef, useState } from "react";
import { checkEmail, checkPassword } from "./validators";

function StateForm() {
    const [email,setEmail] = useState("");
    //const [emailErrorMessage, setemailErrorMessage ]= useState("");
    const [password,setPassword] = useState("");
   // const [passwordErrorMessage,setPasswordErrorMessage] = useState("")
    
    const[isFirstSubmitDone,setisFirstSubmitDone] = useState(false);

    //usememo for performance
    const emailErrorMessage = useMemo(() =>{
       return isFirstSubmitDone? checkEmail(email):[];
    },[isFirstSubmitDone,email]); 

    const passwordErrorMessage = useMemo(() =>{
        return  isFirstSubmitDone ? checkPassword(password):[];
    },[isFirstSubmitDone,password]);
  function handleSubmit(e){
    e.preventDefault();
  setisFirstSubmitDone(true);
    const emailErrors = checkEmail(email);
  
    const passwordErrors = checkPassword(password);
  
   // setemailErrorMessage(emailErrors);
   // setPasswordErrorMessage(passwordErrors);
  
    if(emailErrors.length === 0 && passwordErrors.length === 0){
      alert("Success")
    }
  }
    return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailErrorMessage.length > 0 ? "error":""}`}>
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <div className="msg" >{ emailErrorMessage !== ""? emailErrorMessage:null }</div>
        </div>
         <div className={`form-group ${passwordErrorMessage.length>0 ? "error":""}`}>
          <label className="label" htmlFor="password">Password</label>
          <input
  
            className="input"
            value={password}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='msg'>{passwordErrorMessage !== ""? passwordErrorMessage:null}</div>
        </div> 
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
    )
  }
  
  export default StateForm
  
```

## using react-hook-form library for forms
+ in this we use the library, 
1. register method to add state to the input, with validation
2. we have react-select component, that we register to our form library using the useController hook, i.e
converts the uncontrolled input to control input, by provinding the onchange and value, that the library needs for form to work
3. our handleSubmit property from library, handles the validation and allows our submit method to be called when all validation pass
```jsx
import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useRef, useState } from "react"
import "./styles.css"
import { checkCountry, checkEmail, checkPassword } from "./validators"
import{useController, useForm} from 'react-hook-form';

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {

  const{
    register,
    handleSubmit,
    formState:{errors},
    control,watch} = useForm();

 const{field:countryField}= useController({
  name:"country",
  control,
rules:{required:{value:true,message:"Required"}},
});

const email = watch("email")
console.log(email)

const country = watch("country")
console.log(country)

 // const emailRef = useRef()
 // const passwordRef = useRef()
 // const countryRef = useRef()

 // const [emailErrors, setEmailErrors] = useState([])
 // const [passwordErrors, setPasswordErrors] = useState([])
 // const [countryErrors, setCountryErrors] = useState([])

  function onSubmit(data) {
   // e.preventDefault()
    // const emailResults = checkEmail(emailRef.current.value)
    // const passwordResults = checkPassword(passwordRef.current.value)
    // const countryResults = checkCountry(countryRef.current.getValue()[0])

    // setEmailErrors(emailResults)
    // setPasswordErrors(passwordResults)
    // setCountryErrors(countryResults)

    // if (
    //   emailResults.length === 0 &&
    //   passwordResults.length === 0 &&
    //   countryResults.length === 0
    // ) {
      console.log(data)
      alert("Success")
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="form">
      <FormGroup errorsMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" 
       {...register("email",{
        required:{value:true,message:"Required"},
        validate: value =>{
         if(!value.endsWith("@gmail.com")){
          return "Must end with @gmail.com"
         }
        }})} />
      </FormGroup>
      <FormGroup errorsMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
         // ref={passwordRef}
         {...register("password",
         {required:{value:true,message:"Required"},
         minLength:{value:10,message:"Must be atleast 10 characters"}
         ,validate:{
          hasLowerCase: value =>{
            if (!value.match(/[a-z]/)) {
              return "Must include at least 1 lowercase letter"
            }},
          hasUpperCase: value => {
            if (!value.match(/[A-Z]/)) {
              return "Must include at least 1 uppercase letter"
            }},
          hasNumber:value =>{
            if (!value.match(/[0-9]/)) {
              return "Must include at least 1 number"
            }}         
         }
        })}
        />
      </FormGroup>
      <FormGroup errorsMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          options={COUNTRY_OPTIONS}
          {...countryField}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App

```

## useReducer hook 
+ we can use it, when we have defined action, that can be repetative 

```jsx
import { useReducer, useState } from "react"

const ACTIONS = {
    DECREMENT:"DECREMENT",
    INCREMENT:"INCREMENT",
    RESET:"RESET",
    CHANGE_COUNTER:"CHANGE_COUNTER"

}
function reducer(state,action){

    switch(action.type){
        case ACTIONS.DECREMENT:
            return state - 1;
        case ACTIONS.INCREMENT:
            return state + 1;
        case ACTIONS.RESET:
            return 0;
        case ACTIONS.CHANGE_COUNTER:
            return state + action.payload.value;       
        default:
            return state;
    }
}
export function Counter({initialCount = 0}){

   // const[counter,setCounter] = useState(initialCount);
    const[counter,dispatch] = useReducer(reducer,initialCount);


    return(
        <>
        {/* <button onClick={() => setCounter(current => current - 1)}>-</button> */}
        <button onClick={() => dispatch({type:ACTIONS.DECREMENT})}>-</button>
        {counter}
        <button onClick={() => dispatch({type:ACTIONS.INCREMENT})}>+</button>
        {/* <button onClick={() => setCounter(current => current + 1)}>+</button> */}

        <br/>
        <br/>
        <br/>
        <button onClick={() => dispatch({type:ACTIONS.CHANGE_COUNTER,payload:{value: 5}})} >+5</button>
        <br/>
        <br/>
        <br/>
        <button onClick={() => dispatch({type:ACTIONS.RESET})} >reset</button>
        </>
    )
}
```

+ fetch api using reducer

```jsx
import { useEffect, useReducer } from "react";
import { useState } from "react";

const ACTIONS = {
   FETCH_START:"FETCH_START",
   FETCH_SUCCESS:"FETCH_SUCCESS",
   FETCH_ERROR:"FETCH_ERROR"
}

function reducer(state,action){

  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
           
              isLoading:true,
              isError:false
             }
    case ACTIONS.FETCH_SUCCESS:
      return{
             data:action.payload.data,
             isLoading:false,
             isError:false
            }
    case ACTIONS.FETCH_ERROR:
      return{
            
             isError:true,
             isLoading:false
            }         
    default:
      break;
  }

}
export function useFetchUsingReducer(url,options={}) {

    // const[data,setData] = useState([]);
    // const[isLoading,setIsLoading] = useState(true);
    // const[isError,setIsError] = useState(false); 

    const[state,dispatch] = useReducer(reducer,{isLoading:false,isError:false})

    useEffect(() =>{

      dispatch({type:ACTIONS.FETCH_START})
      // setData([]);
      // setIsError(false);
      // setIsLoading(true);

      const controller = new AbortController();
      fetch(url,{signal:controller.signal},options).then(res =>{
        if(res.status === 200){
          return res.json()
        }else{
         Promise.reject(res);
        }
      }).then((data) => dispatch({type:ACTIONS.FETCH_SUCCESS,payload:{data:data}}))
      .catch((e) => {
        if(e?.name === "AbortError") return;
        dispatch({type:ACTIONS.FETCH_ERROR})})
      
      return(() =>{
        controller.abort();
      })
  } ,[url])

  return {...state}
  }
```

## UseContext hook 
+ it is used to pass data similar to props, but more universally throughout the component, if something is global for the app, and passing props in each component, is not efficent
+ the App class defines the context and pass values, to be passed to child component
```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { Child } from './Child';
import { createContext } from 'react';


export const ThemeContext = createContext();
function App() {

const[isDarkmode,setIsDarkMode] = useState(false);

useEffect(() =>{
  document.body.style.background = isDarkmode?"#333":"white";
  document.body.style.color = isDarkmode?"white":"#333";

})
function toggle(){

  setIsDarkMode(current => !current);
}


  return (
   <ThemeContext.Provider value={{isDarkmode,toggle}}>
 <Child/>
 {/* <Child isDarkmode={isDarkmode} toggle={toggle}/> */}
  <p>
  No internet
Try:

Checking the network cables, modem, and router
Reconnecting to Wi-Fi
Running Windows Network Diagnostics
ERR_INTERNET_DISCONNECTED

  </p>

   </ThemeContext.Provider>
  )
}

export default App

```
+ child and grandchild component consuming the context values

```jsx
export function Child(){
    return (
        <GrandChild />
        // <GrandChild isDarkmode={isDarkmode} toggle={toggle} />
    )
}

import { useContext } from "react"
import { ThemeContext } from "./App"
export function GrandChild(){

    const{isDarkmode,toggle} = useContext(ThemeContext)
    return(<>
      <button
   style={{
    backgroud: isDarkmode ?"White":"#333",
    color:isDarkmode?"#333": "White",
    border:"none",
    padding:".5em",
    borderRadius:".25em",
    cursor:"pointer",
   }}
   onClick={toggle}> Toggle Theme</button>
    </>)
}
```
+ in case of class component the child component need to add consumer tag and 
+ the method that comes with it get the data

```jsx
import React from "react"
import { ThemeContext } from "./App"

export class GrandChildClass extends React.Component{

  render(){

    return(<ThemeContext.Consumer>
      {
        ({isDarkmode,toggle}) =>(
          <button
   style={{
    backgroud: isDarkmode ?"White":"#333",
    color:isDarkmode?"#333": "White",
    border:"none",
    padding:".5em",
    borderRadius:".25em",
    cursor:"pointer",
   }}
   onClick={toggle}> Toggle Theme</button>
   )
      }
      
    </ThemeContext.Consumer>)
  }
    
}
```
## Store state as locally as possible 
+ use the component if no need to access the state in other component
+ use APP if state is shared in different component


## Handle Derived state

+ in case we has a list and we want to use the list filtered and show that in ui, So instead of creating two states, we can just update filter list on page re render, and useMemo, so it only changes if list or input changes

+ in case we want from a list of user a selected user, instead of creating two state object, we can use the user id as state object, and search from list to get user each time.

```jsx
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
    </>
  )
}

export default App

```
## Environmental variable in React

+ for storing and using environmental variable
+ we need to create .env file in the root of the application
+ we can create separate env for dev and production by 
adding env.production.local and env.development.local to the file name
+ for react app created by vite, we can make env variable public by adding
VITE_variableName = value 
```
// can be exposed to user
VITE_URL=dev.com
// private
PASSWORD=password123
```
+ to use env variable in application, syntax is
```jsx
// can be viewed in UI
 <div> {import.meta.env.VITE_URL}
 
 // cannot be viewed
   {import.meta.env.PASSWORD}</div>
```

+ for react app created with vite, we use 
REACT_APP_variableName = value 
for storing public env







