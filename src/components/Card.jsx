import Image from "next/image";
import Link from "next/link";
import {FiThumbsUp} from "react-icons/fi"

const Card = ({result}) => {
    return ( 
        <div className="m-3 border-[1px] border-slate-300 group cursor-pointer sm:hover:shadow-slate-200 sm:hover:shadow-lg hover:bg-slate-200 transition-shadow duration-200 ease-in-out rounded-lg">
            <Link href={`/movie/${result.id}`}>
            <Image 
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            width={500}
            height={300}
            alt="poster"
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-200 w-full"
             />
             <div className="p-2" >
                <p className="line-clamp-2 text-sm">{result.overview}</p>
                <h2 className="font-bold text-lg truncate ">{result.title || result.name}</h2>
                <p className="flex items-center">
                    {result.release_date || result.first_air_date}
                    <FiThumbsUp className="h-5 mr-1 ml-3" />
                    {result.vote_count}
                </p>
             </div>

            </Link>
        </div>
     );
}
 
export default Card;