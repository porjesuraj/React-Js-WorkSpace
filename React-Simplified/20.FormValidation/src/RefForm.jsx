import { useRef, useState } from "react";
import { checkEmail, checkPassword } from "./validators";

function RefForm() {
    const email = useRef();
    const [emailErrorMessage, setemailErrorMessage ]= useState("");
    const password = useRef();
    const [passwordErrorMessage,setPasswordErrorMessage] = useState("")
    const[isFirstSubmitDone,setisFirstSubmitDone] = useState(false);
    
  function handleSubmit(e){
    e.preventDefault();
  
    setisFirstSubmitDone(true);
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
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailErrorMessage.length > 0 ? "error":""}`}>
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" id="email"  ref={email}
          onChange={(e)=> isFirstSubmitDone? setemailErrorMessage(checkEmail(e.target.value)): undefined}
          />
          <div className="msg" >{ emailErrorMessage !== ""? emailErrorMessage:null }</div>
        </div>
         <div className={`form-group ${passwordErrorMessage.length>0 ? "error":""}`}>
          <label className="label" htmlFor="password">Password</label>
          <input
  
            className="input"
            ref={password}
            type="password"
            id="password"
            onChange={(e) => isFirstSubmitDone? setPasswordErrorMessage(checkPassword(e.target.value)):undefined}
          />
          <div className='msg'>{passwordErrorMessage !== ""? passwordErrorMessage:null}</div>
        </div> 
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
    )
  }
  
  export default RefForm
  