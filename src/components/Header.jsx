"use client"

import Link from "next/link";
import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs"


const Header = () => {
    

    return ( 
        <div className="flex items-center p-3 justify-between lg:max-w-6xl mx-auto">
            <div className="flex gap-4">
                <MenuItem  title="Home" address ="/" Icon={AiFillHome}/>
                <MenuItem  title="About" address ="/about" Icon={BsFillInfoCircleFill}/>
                
            </div>
            <div className="flex items-center gap-4">
            
            <Link href="/"  className=" flex gap-1 items-center">
                <span className="text-2xl font-bold bg-amber-500 rounded-lg text-white py-1 px-2">IMDB</span>
                <span className="text-xl hidden sm:inline">Clone</span>
            </Link>
            </div>
        </div>
     );
}
 
export default Header;