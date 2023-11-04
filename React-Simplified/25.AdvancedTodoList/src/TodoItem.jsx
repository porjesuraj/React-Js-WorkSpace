import { useContext, useRef, useState } from "react"
import { TodoContext } from "./App"

export function TodoItem({ id, name, completed }) {
const { deleteTodo,toggleTodo,handleEditName} = useContext(TodoContext);
const[isEditing,setIsEditing] = useState(false);
const nameRef = useRef();

function handleEditSubmit(e){
  e.preventDefault();

  if(nameRef.current.value == "") return;

  handleEditName(id,nameRef.current.value);
  setIsEditing(false);
}
  return (
    <>
{ isEditing ? 
<form onSubmit={handleEditSubmit}>

<input 
autoFocus
defaultValue={name} ref={nameRef} />
<button type="submit" data-button-delete>
  Save
</button>
</form>

: <li className="list-item">
<label className="list-item-label">
  <input
    checked={completed}
    type="checkbox"
    data-list-item-checkbox
    onChange={e => toggleTodo(id, e.target.checked)}
  />
  <span data-list-item-text>{name}</span>
</label>
<button onClick={() => setIsEditing(!isEditing)} data-button-delete>
  Edit
</button>
<button onClick={() => deleteTodo(id)} data-button-delete>
  Delete
</button>
</li>}
    
</>
  )

}
