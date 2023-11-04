import { useContext, useRef } from "react";
import { TodoContext } from "../App";

export function FilterTodoForm({name,setName,isCompleteChecked, setIsCompleteChecked}){

   // const {} = useContext(TodoContext);
   // const nameRef = useRef();
    const hideCompleteRef = useRef();
    return(
        <div className="filter-form">
        <div className="filter-form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} 
          onChange={(e) => setName(e.target.value)} />
        </div>
        <label>
          <input type="checkbox" checked={isCompleteChecked}
          onChange={e => setIsCompleteChecked(e.target.checked)} />
          Hide Completed
        </label>
      </div>
    )
}