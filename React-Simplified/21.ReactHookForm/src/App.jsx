import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useRef, useState } from "react"
import "./styles.css"
import { checkCountry, checkEmail, checkPassword } from "./validators"
import{useController, useForm} from 'react-hook-form';

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {

  const{
    register,
    handleSubmit,
    formState:{errors},
    control,watch} = useForm();

 const{field:countryField}= useController({
  name:"country",
  control,
rules:{required:{value:true,message:"Required"}},
});

const email = watch("email")
console.log(email)

const country = watch("country")
console.log(country)

 // const emailRef = useRef()
 // const passwordRef = useRef()
 // const countryRef = useRef()

 // const [emailErrors, setEmailErrors] = useState([])
 // const [passwordErrors, setPasswordErrors] = useState([])
 // const [countryErrors, setCountryErrors] = useState([])

  function onSubmit(data) {
   // e.preventDefault()
    // const emailResults = checkEmail(emailRef.current.value)
    // const passwordResults = checkPassword(passwordRef.current.value)
    // const countryResults = checkCountry(countryRef.current.getValue()[0])

    // setEmailErrors(emailResults)
    // setPasswordErrors(passwordResults)
    // setCountryErrors(countryResults)

    // if (
    //   emailResults.length === 0 &&
    //   passwordResults.length === 0 &&
    //   countryResults.length === 0
    // ) {
      console.log(data)
      alert("Success")
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="form">
      <FormGroup errorsMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" 
       {...register("email",{
        required:{value:true,message:"Required"},
        validate: value =>{
         if(!value.endsWith("@gmail.com")){
          return "Must end with @gmail.com"
         }
        }})} />
      </FormGroup>
      <FormGroup errorsMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
         // ref={passwordRef}
         {...register("password",
         {required:{value:true,message:"Required"},
         minLength:{value:10,message:"Must be atleast 10 characters"}
         ,validate:{
          hasLowerCase: value =>{
            if (!value.match(/[a-z]/)) {
              return "Must include at least 1 lowercase letter"
            }},
          hasUpperCase: value => {
            if (!value.match(/[A-Z]/)) {
              return "Must include at least 1 uppercase letter"
            }},
          hasNumber:value =>{
            if (!value.match(/[0-9]/)) {
              return "Must include at least 1 number"
            }}         
         }
        })}
        />
      </FormGroup>
      <FormGroup errorsMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          options={COUNTRY_OPTIONS}
          {...countryField}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App
