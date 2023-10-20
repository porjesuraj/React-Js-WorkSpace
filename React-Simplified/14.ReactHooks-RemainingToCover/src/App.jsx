import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const LIST = Array(1_000_000).fill()
.map((_,i) => i+1);
function App() {
  const [count, setCount] = useState(0)
  const[query,setQuery] = useState("");
  const[isDarkMode,setIsDarkMode] = useState(false);

  const inputRef = useRef();
    useEffect(() =>{
 //   inputRef.current.focus();
  })

  const printName = useCallback(() =>{
    console.log(isDarkMode);
  },[isDarkMode])

  useEffect(() =>{
    printName();
  },[printName])
  const filteredList = useMemo(() =>{
   return LIST.filter(n => n.toString().includes(query));
  },[query])
  

  console.log(filteredList.length)


  function inputChange(value){
    setCount(value);
     console.log(inputRef.current)
  }
  return (
    <>
<div style={{
  background:isDarkMode?"#333" :"White",
  color:isDarkMode ? "White":"#333",

}}>

<label>Query:
<br/>
  <input value={query} onChange={e => setQuery(e.target.value)}/>
</label>
<br/>
 <input ref={inputRef} value={count}  onChange={(e) =>inputChange(e.target.value) } />
<br/>
 <label>

  <input type='checkbox' checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} />
  Dark Mode
 </label>
 <br/>
</div>

   
    </>
  )
}

export default App
