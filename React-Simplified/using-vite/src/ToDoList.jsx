export function ToDoList({children,iscomplete}){
    return(
        <ul>
            <label>{children}
           <input type="checkbox" defaultChecked={iscomplete}/></label>
        </ul>
    )
}