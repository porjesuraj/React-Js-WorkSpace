import { NavLink } from "react-router-dom";

export function TeamNavbar(){

    return(
        <>
         <nav>
    <ul>
      <li>
        <NavLink to='/team/jay'>Team Member jay</NavLink>
      </li>
      <li>
        <NavLink to='/team/ray'>Team Member ray</NavLink>
      </li>
    </ul>
   </nav>
        </>
    )
}