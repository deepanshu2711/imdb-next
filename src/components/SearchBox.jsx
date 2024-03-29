"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
    const [search,setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        router.push(`/search/${search}`);
    }
    function handleChange(e) {
        setSearch(e.target.value)
    }
    return ( 
        <form className="flex justify-between px-5 max-w-6xl mx-auto items-center" onSubmit={handleSubmit}>
            <input id="search" type="text" placeholder="Search Keywords" className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
            value={search}
            onChange={handleChange}
             />
            <button className="text-amber-600 uppercase disabled:text-gray-400" disabled={!search}>Search</button>
        </form>
     );
}
 
export default SearchBox;