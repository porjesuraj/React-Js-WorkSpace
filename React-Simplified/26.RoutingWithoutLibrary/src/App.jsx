
import './App.css'
import { Navbar } from './Navbar';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Store } from './pages/Store';


function App() {
  let component;

  switch(location.pathname){

    case "/":
      component =  <Home/>;
      break;
    case "/store":
      component = <Store/>
      break;

    case "/contact":
      component = <Contact/>  
      break;
    default:
      null;
      

  }
  return (
    <>
    <Navbar/>
    {component}
    </>
  )
}

export default App
