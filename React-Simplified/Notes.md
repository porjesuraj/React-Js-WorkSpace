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