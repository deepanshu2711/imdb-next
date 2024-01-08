"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavBarItem = ({title,param}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    return ( 
        <div>
            <Link className={`hover:text-amber-600 ${genre ===param && 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg'} `} 
            href={`/?genre=${param}`}>
                {title}
            </Link>
        </div>
     );
}
 
export default NavBarItem;