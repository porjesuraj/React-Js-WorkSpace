import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

// If the API does not work use these local URLs
// const URLS = {
//   USERS: "users.json",
//   POSTS: "posts.json",
//   COMMENTS: "comments.json",
// }

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
}


 const OPTIONS = {
   method: "POST",
   body: JSON.stringify({ name: "Suraj" }),
   headers: {
     "Content-type": "application/json",
   },
 }

function App() {
  const [url, setUrl] = useState(URLS.USERS,OPTIONS)

  const {data, isLoading, isError} = useFetch(url)
  // BONUS:
  // const { data, isLoading, isError } = useFetch(url, OPTIONS)

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  )


  function useFetch(url,options={}) {

    const[data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const[isError,setIsError] = useState(false); 

    useEffect(() =>{

      setData([]);
      setIsError(false);
      setIsLoading(true);

      const controller = new AbortController();
      fetch(url,{signal:controller.signal,...options}).then(res =>{
        if(res.status === 200){
          return res.json()
        }else{
         Promise.reject(res);
        }
      }).then(setData).catch((e) => {
        if(e?.name === "AbortError") return;
        console.log(e); setIsError(true)}).
      finally(() => {setIsLoading(false);
        console.log(data);
      
      })
      
      return(() =>{
        controller.abort();
      })
  }    ,[url])

  return {data,isLoading,isError}
  }
}
export default App

