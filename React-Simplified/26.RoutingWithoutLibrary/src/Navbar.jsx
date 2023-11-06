import { NavLink } from "react-router-dom";

export function Navbar(){

    return(
        <>
         <nav>
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to='/store'>Store</NavLink>
      </li>
      <li>
        <NavLink to='/team'>Team</NavLink>
      </li>
      <li>
        <NavLink to='..'>.. Default relative to Route</NavLink>
      </li>
      <li>
        <NavLink to='..' relative="path">.. relative to Path</NavLink>
      </li>
      <li>
        <NavLink to='.'>. Default relative to Route</NavLink>
      </li>
      <li>
        <NavLink to='.' relative="path">. relative to Path</NavLink>
      </li>
    </ul>
   </nav>
        </>
    )
}