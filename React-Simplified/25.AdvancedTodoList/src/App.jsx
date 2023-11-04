import { createContext, useContext, useEffect, useReducer, useState } from "react"
import "./styles.css"
import { TodoItem } from "./TodoItem"
import "crypto";
import { AddNewTodo } from "./AddNewTodo";
import { TodoList } from "./TodoList";
import { FilterTodoForm } from "./assets/FilterTodoForm";

const LOCALSTORAGE_KEY= "test5"
const ACTIONS ={
  ADD_TODO : "Add todo",
  DELETE_TODO:"Delete todo",
  TOGGLE_TODO:"Toggle todo",
  EDIT_TODO:"Edit todo"
}


function reducer(state,{type,payload})
{
  switch (type) {
    case ACTIONS.ADD_TODO:
       return [...state,{name: payload.name, completed:false,id:crypto.randomUUID()}];
    case ACTIONS.DELETE_TODO:
      return state.filter(item => item.id != payload.id)  
    case ACTIONS.TOGGLE_TODO:
     return state.map(todo => {
        if (todo.id === payload.id) 
            return { ...todo, completed:payload.completed }
        return todo; 
  });
   case ACTIONS.EDIT_TODO:
     return state.map(todo =>{
        if(todo.id == payload.id)
        {
          return{...todo,name:payload.name}
        }else
           return todo;
      });  
    default:
      throw new Error(`No action found for ${type}.`)
  }
}
export const TodoContext = createContext();
function App() {
 
  //const [todos, setTodos] = useLocalStoreage("TodosLocal",[])
  const[filterName, setFilterName] = useState("");
  const[isCompleteChecked, setIsCompleteChecked] = useState(false);
  const[todos,dispatch] = useReducer(reducer,[],initialValue =>{
    const localStorage = window.localStorage.getItem(LOCALSTORAGE_KEY);
    if(localStorage == null || localStorage === ""){

      return initialValue;
    }else{
      console.log("parse" + JSON.parse(localStorage))
      return JSON.parse(localStorage);
        //return localStorage;
    }
  });
  const [newTodoName, setNewTodoName] = useState("")
  useEffect(() =>{

    localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(todos)); 
    console.log("stringify",JSON.stringify(todos));  

  },[todos]);

  const filterTodos = todos.length !== 0 && filterName !== "" && isCompleteChecked ? todos.filter(i => i.name == filterName && i.completed != isCompleteChecked):
  filterName !== ""? todos.filter(i => i.name == name): todos;

  function addNewTodo(name) {
    dispatch({type:ACTIONS.ADD_TODO,payload:{name}})
  }

  function toggleTodo(todoId, completed) {
    dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todoId,completed:completed}})
  }

  function deleteTodo(todoId) {
    dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todoId}})
  }

  function  handleEditName(id,name){
    dispatch({type:ACTIONS.EDIT_TODO,payload:{id,name}})
  }

  return (
    <TodoContext.Provider value={{
      todos: filterTodos,
      addNewTodo,
      deleteTodo,
      toggleTodo,
      handleEditName
    }}>
      <FilterTodoForm name={filterName} setName={setFilterName}
       isCompleteChecked={isCompleteChecked} setIsCompleteChecked={setIsCompleteChecked} />
      <TodoList />
    
    <AddNewTodo />
    </TodoContext.Provider>
  )

  function useLocalStoreage(key,initialValue){

    const[value,setValue] = useState(() =>{
      const localStorage = window.localStorage.getItem(key);
      if(localStorage == null || localStorage === ""){

        return initialValue;
      }else{
        console.log("parse" + JSON.parse(localStorage))
        return JSON.parse(localStorage);
          //return localStorage;
      }
    });

    useEffect(() =>{
      if(value === undefined)
         localStorage.removeItem(key);

      localStorage.setItem(key,JSON.stringify(value)); 
      console.log("stringify",JSON.stringify(value));  

    },[value]);

    return [value,setValue];
  }


}

export default App
