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