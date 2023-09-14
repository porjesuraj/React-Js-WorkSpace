export function Declarative({name, age}){
    return(
        <h1>{name} <span style={{color:"red"}}>{age}</span></h1>
    )
}


// imperative
const name = "suraj";
const age ="29";
const h1 = document.createElement("h1");


const span = document.createElement("span")


span.style.color= "red";

h1.append(span);
h1.innerText = name;
span.innerText = age;
