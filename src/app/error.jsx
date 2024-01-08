"use client";

import { useEffect } from "react";



const error = ({error,reset}) => { 
    useEffect(()=>{
        console.log(error)
        
    },[error])            //reset means it try again
    return ( 
        <div className="text-center mt-10 flex flex-col gap-2">
            <h1>
                SomeThing went wrong . Please try again
            </h1>
            <button className="hover:text-amber-600" onClick={()=>reset()}>Try Again</button>
        </div>
     );
}
 
export default error;