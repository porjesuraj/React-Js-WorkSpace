import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url,options={}) {

    const[data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const[isError,setIsError] = useState(false); 

    useEffect(() =>{

      setData([]);
      setIsError(false);
      setIsLoading(true);

      const controller = new AbortController();
      fetch(url,{signal:controller.signal},options).then(res =>{
        if(res.status === 200){
          return res.json()
        }else{
         Promise.reject(res);
        }
      }).then(setData).catch((e) => {
        if(e?.name === "AbortError") return;
        console.log(e); setIsError(true)}).
      finally(() => {
        if(controller.signal.aborted) return;
           setIsLoading(false);
        console.log(data);
      
      })
      
      return(() =>{
        controller.abort();
      })
  } ,[url])

  return {data,isLoading,isError}
  }