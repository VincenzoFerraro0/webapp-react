import MovieCard from '../components/MovieCard';
import { useGlobalContext } from '../context/GlobalContext';
;

export default function HomePage() {
  const { movies, loadMovies } = useGlobalContext();


  return (

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Bool Movies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Caricamento in corso...</p>
        )}
      </div>
    </div>


  );
}
