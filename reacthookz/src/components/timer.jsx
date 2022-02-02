import { useEffect } from "react"
import { useState } from "react"


export const Timer=({prop})=>{
 
    let {start,end}=prop;

   const [count,setCount]=useState(start)

   useEffect(()=>{
    const intr= setInterval(() => {
         setCount(p=>{
             if(p===end){clearInterval(intr)}
             return p+1
         }
             
            )
     }, 1000);
     
   return()=>{
       clearInterval(intr)
   };



   },[]);

    return <div>
        counter : {count}
    </div>

    


}