import Image from "next/image";

async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={500}
          height={300}
          alt="posterimage"
          className="rounded-lg md:w-96 md:h-96"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          
          <p>
          <samp className="font-semibold mr-1 mb-3">Date Released :</samp>
          {movie.release_date || movie.first_air_date}
          </p>

           
          <p >
          <span className="font-semibold mr-1 mb-3">Vote Count :</span>
          {movie.vote_count}
          </p>

          <p>
          <span className="font-semibold mr-1 mb-3">Rating :</span>
          {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;