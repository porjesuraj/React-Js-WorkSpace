import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { checkEmail, checkPassword } from './validators';
import RefForm from './RefForm';
import StateForm from './StateForm';

function App() {
  const email = useRef();
  const [emailErrorMessage, setemailErrorMessage ]= useState("");
  const password = useRef();
  const [passwordErrorMessage,setPasswordErrorMessage] = useState("")

let jsx;
  
// function handleSubmit(e){
//   e.preventDefault();

//   const hasUpperCase =str => /[A-Z]/.test(str);
//   const hasLowerCase =str => /[a-z]/.test(str);
//   const hasnumber =str => /\d/.test(str);
//   const emailValue = email.current.value;
//   const passwordValue = password.current.value;
//   if(emailValue !== "" && emailValue.includes("@gmail.com"))
//   {
//     setemailErrorMessage("");

//     console.log(password.length);
//     if (passwordValue !=="" && passwordValue.length > 10 && hasUpperCase(passwordValue) && hasLowerCase(passwordValue) && hasnumber(passwordValue))
//     {

//       alert("Success")
//       setemailErrorMessage("");
//       setPasswordErrorMessage("");
//     }else{
//           setPasswordErrorMessage("Enter Valid password")
//     }
//   }else{
//          setemailErrorMessage("Must end in @webdevsimplified.com");
//   }
// }

function handleSubmit(e){
  e.preventDefault();

  const emailErrors = checkEmail(email.current.value);

  const passwordErrors = checkPassword(password.current.value);

  setemailErrorMessage(emailErrors);
  setPasswordErrorMessage(passwordErrors);

  if(emailErrors.length === 0 && passwordErrors.length === 0){
    alert("Success")
  }
}
  return (
  <>
    {/* <RefForm /> */}
     
    <StateForm/> 
  </>
  )
}

export default App
