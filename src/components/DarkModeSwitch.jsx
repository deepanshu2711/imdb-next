"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import  {MdLightMode, MdDarkMode} from "react-icons/md";

const DarkModeSwitch = () => {
    const {theme,setTheme,systemTheme} =useTheme();
    const currentThemme = theme==='system' ?systemTheme:theme;
    const[isMounted ,setisMounted] = useState(false);

    useEffect(()=>{
        setisMounted(true);
    },[]);


    return ( 
        <div>
            {isMounted && (currentThemme==="dark"?<MdLightMode onClick={()=>setTheme("light")}  className="text-xl cursor-pointer hover:text-amber-500" />
            :<MdDarkMode onClick={()=>setTheme("dark")} className="text-xl cursor-pointer hover:text-amber-500" />)}           
        </div>
     );
}
 
export default DarkModeSwitch;