
import {  useState, useEffect, } from "react"
const useFetch = (url) => {
    const [data, setData]= useState(null)
    const [error,  setError]= useState(null)
    const [isLoading, setIsloading]=useState (true)
// custom hook

    useEffect(()=>{ setTimeout(() => { 
    return fetch (url)
        .then( res =>{
         console.log(res)
         if(!res.ok){
             throw Error ("could not fetch"); 
         }
         
          return res.json();  

        })
        .then(data=>{
            
         setData(data);
         setIsloading(false);
         setError(null)

        })

        .catch[err=>{ 
            console.log(err)
         setIsloading(false);
         setError(err.message)
        }] 



    }, 0);
        
    
    }, [url])

    
    return {data, isLoading, error};
}
 
export default useFetch;