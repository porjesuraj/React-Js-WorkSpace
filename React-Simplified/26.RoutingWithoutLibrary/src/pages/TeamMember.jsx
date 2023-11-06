import { useOutletContext } from "react-router-dom"

export function TeamMember({name}){

    const context = useOutletContext();

    return(
    <>
    HI, {name} 
    <br/>
    {context}
    </>)
}