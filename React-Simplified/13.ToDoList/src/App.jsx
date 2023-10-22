import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItemList from './TodoItemList'

function App() {
  const[itemList,setItemList] = useState([]);
  const[input,setInput] = useState("");

  const nameRef = useRef("Suraj");
  console.log(nameRef.current);
  nameRef.current = "Raj";
  function handleAddClick(e){
    e.preventDefault()

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
}

export default App
