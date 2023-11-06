import { Outlet, Route, createBrowserRouter, createHashRouter, createMemoryRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { TeamNavbar } from "./TeamNavBar";
import './style.css'
/*
export const router1 = createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/store",element:<Store/>},
    {path:"/contact",element:<Contact/>}
])
*/
export const router = createBrowserRouter([
    {element:<NavLayout/>,
     errorElement:<h1>Error</h1>,
    children:[

    {path:"/",element:<Home/>},
    {path:"/store",element:<Store/>, errorElement:<h1>Error</h1>},
    {path:"/contact",element:<Contact/>},
    {path:"/team",element:<TeamNavLayout/>,
     children:[
        {index:true,element:<Team/>},
        {path:"jay",element:<TeamMember name="jay"/>},
        {path:"ray",element:<TeamMember name="ray"/>}
    ]}
   
    ]}
    
])
export const router1 = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route path="/" element={<Home/>} />
    <Route path="/store" element={<Store/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/team" element={<Team/>} />
    </>
    )
)
// use when not need to change page, change # part of url
//export const router = createHashRouter([])

//use for testing,as stores everything in memory of page, page url does'nt change
//export const router = createMemoryRouter([])

function NavLayout(){

    return(
        <>
       <Navbar/>
       <Outlet/>
        </>
    )
}

function TeamNavLayout(){
    return(
        <>
        <TeamNavbar/>
        <Outlet context="@Team Context"/>
        </>
    )
}