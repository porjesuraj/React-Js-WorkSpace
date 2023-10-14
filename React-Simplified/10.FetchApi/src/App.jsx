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
