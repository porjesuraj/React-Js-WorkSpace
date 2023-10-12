import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Child} from './Child'
import { ChildClass } from './ChildClass'
function App() {
  const [count, setCount] = useState(0)
 const[showBoolean,setShowBoolean] = useState(true);

 const childComponent = showBoolean ? <Child/>:null;
  return (
    <>
     {/* <button onClick={() => setShowBoolean((c) => !c)}>Show/Hide</button> */}
     <br/>
{/* {
  childComponent
} */}
<ChildClass/>
    </>
  )
}

export default App
