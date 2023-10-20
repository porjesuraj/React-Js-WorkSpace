import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToggle } from './Hooks/ToggleHook';
import { setInputValue } from './Hooks/SetInputValue';

function App() {
 // const [name,setName] = useState("");
 const nameInput = setInputValue("");
  const[isDarkMode,toggleDarkMode] = useToggle(false);
  //useState(false);

  return (
    <>
    <div style={{
      background: isDarkMode ? "#333": "White",
      color: isDarkMode ?"white":"black"
    }}>
<label> Name :</label>
<br/>
   {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <input {...nameInput} />
        <br/>
        {/* <input type='checkbox' checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} /> */}
      <br/>
      <button  onClick={toggleDarkMode} style={{background:"Grey",display:'-ms-flexbox',}}>Toggle Darkmode</button>
      <br/>

    </div>
     
    </>
  )


  
}

export default App
