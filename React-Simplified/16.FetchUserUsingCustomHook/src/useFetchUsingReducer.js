import { useEffect, useReducer } from "react";
import { useState } from "react";

const ACTIONS = {
   FETCH_START:"FETCH_START",
   FETCH_SUCCESS:"FETCH_SUCCESS",
   FETCH_ERROR:"FETCH_ERROR"
}

function reducer(state,action){

  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
           
              isLoading:true,
              isError:false
             }
    case ACTIONS.FETCH_SUCCESS:
      return{
             data:action.payload.data,
             isLoading:false,
             isError:false
            }
    case ACTIONS.FETCH_ERROR:
      return{
            
             isError:true,
             isLoading:false
            }         
    default:
      break;
  }

}
export function useFetchUsingReducer(url,options={}) {

    // const[data,setData] = useState([]);
    // const[isLoading,setIsLoading] = useState(true);
    // const[isError,setIsError] = useState(false); 

    const[state,dispatch] = useReducer(reducer,{isLoading:false,isError:false})

    useEffect(() =>{

      dispatch({type:ACTIONS.FETCH_START})
      // setData([]);
      // setIsError(false);
      // setIsLoading(true);

      const controller = new AbortController();
      fetch(url,{signal:controller.signal},options).then(res =>{
        if(res.status === 200){
          return res.json()
        }else{
         Promise.reject(res);
        }
      }).then((data) => dispatch({type:ACTIONS.FETCH_SUCCESS,payload:{data:data}}))
      .catch((e) => {
        if(e?.name === "AbortError") return;
        dispatch({type:ACTIONS.FETCH_ERROR})})
      
      return(() =>{
        controller.abort();
      })
  } ,[url])

  return {...state}
  }