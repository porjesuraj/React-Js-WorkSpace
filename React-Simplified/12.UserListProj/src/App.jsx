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

let jsx;

const CustomHTML = `
<h1> Cross Site Script Attack!!!</h1>
`

return (
    <> 
      <h1>User List</h1>
<ul>{loading ? <h2>Loading ...</h2> : users != null ? 
(users.map((user) =>{   
return <Users key={user.id} {...user}/>
})
)
:"Error"}</ul>
    

    <div dangerouslySetInnerHTML={{__html:CustomHTML }}>
      </div>
    </>
  )
}



function Users({name, email}){
  return(
       
    <>
    <li>{name}  {email}   <br/> </li>

    </>
  )
}
export default App
