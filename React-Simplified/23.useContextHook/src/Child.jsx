import { GrandChild } from "./GrandChild";
import { GrandChildClass } from "./GrandChildClass";

export function Child(){
    return (
        <>
        {/* <GrandChild /> */}
        <br/>
        <GrandChildClass/>
        </>
        // <GrandChild isDarkmode={isDarkmode} toggle={toggle} />
    )
}