import { useMemo, useRef, useState } from "react";
import { checkEmail, checkPassword } from "./validators";

function StateForm() {
    const [email,setEmail] = useState("");
    //const [emailErrorMessage, setemailErrorMessage ]= useState("");
    const [password,setPassword] = useState("");
   // const [passwordErrorMessage,setPasswordErrorMessage] = useState("")
    
    const[isFirstSubmitDone,setisFirstSubmitDone] = useState(false);

    //usememo for performance
    const emailErrorMessage = useMemo(() =>{
       return isFirstSubmitDone? checkEmail(email):[];
    },[isFirstSubmitDone,email]); 

    const passwordErrorMessage = useMemo(() =>{
        return  isFirstSubmitDone ? checkPassword(password):[];
    },[isFirstSubmitDone,password]);
  function handleSubmit(e){
    e.preventDefault();
  setisFirstSubmitDone(true);
    const emailErrors = checkEmail(email);
  
    const passwordErrors = checkPassword(password);
  
   // setemailErrorMessage(emailErrors);
   // setPasswordErrorMessage(passwordErrors);
  
    if(emailErrors.length === 0 && passwordErrors.length === 0){
      alert("Success")
    }
  }
    return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailErrorMessage.length > 0 ? "error":""}`}>
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <div className="msg" >{ emailErrorMessage !== ""? emailErrorMessage:null }</div>
        </div>
         <div className={`form-group ${passwordErrorMessage.length>0 ? "error":""}`}>
          <label className="label" htmlFor="password">Password</label>
          <input
  
            className="input"
            value={password}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='msg'>{passwordErrorMessage !== ""? passwordErrorMessage:null}</div>
        </div> 
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
    )
  }
  
  export default StateForm
  