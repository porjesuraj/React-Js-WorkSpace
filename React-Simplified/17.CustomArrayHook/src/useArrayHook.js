import { useCallback, useState } from "react"

export default function useArray(init){
    const[array,setArray] = useState(init)
  
    const set = useCallback((selectedArray  = []) => {
      
        setArray(current => {
          return selectedArray
        })
      },[]);
    const push = useCallback((selectedNumber) => {
        setArray((current) => [...current,selectedNumber])
      },[]);
  
    const replace = useCallback((index,value) => {
        setArray(current =>{
        // return current.map((_,i) =>{
        //   if(i === index){
        //     return value;
        //   }
        //   return _; })
        return[...current.slice(0,index),value,...current.slice(index+1)];
    
    })
      },[])
  
    const filter = useCallback((value) =>{
  
        setArray(current => current.filter(v => v < value))
       },[])
  
    const remove = useCallback((index) =>{
  
        setArray(current => [...current.slice(0,index),...current.slice(index+1)])
      },[])
  
    const clear = useCallback(() =>{
        setArray([])
      },[])
  
    const reset = useCallback((init)=>{
        setArray(init);
      },[])
  
    return{array,set,push,replace,filter,remove,clear,reset}
  }