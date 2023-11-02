import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { Child } from './Child';
import { createContext } from 'react';


export const ThemeContext = createContext();
function App() {

const[isDarkmode,setIsDarkMode] = useState(false);

useEffect(() =>{
  document.body.style.background = isDarkmode?"#333":"white";
  document.body.style.color = isDarkmode?"white":"#333";

})
function toggle(){

  setIsDarkMode(current => !current);
}


  return (
   <ThemeContext.Provider value={{isDarkmode,toggle}}>
 <Child/>
 {/* <Child isDarkmode={isDarkmode} toggle={toggle}/> */}
  <p>
  No internet
Try:

Checking the network cables, modem, and router
Reconnecting to Wi-Fi
Running Windows Network Diagnostics
ERR_INTERNET_DISCONNECTED

  </p>

   </ThemeContext.Provider>
  )
}

export default App
