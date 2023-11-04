import { useContext } from "react"
import { TodoContext } from "./App"
import { TodoItem } from "./TodoItem";

export function TodoList(){

    const {todos, deleteTodo,toggleTodo} = useContext(TodoContext);
    return(
        <>
        <ul id="list">
        {console.log(JSON.stringify(todos))}
       { todos.length !== 0 ? todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        }): null}
      </ul>
        </>
    )
}