import Loader from '../components/Loader';
import MovieCard from '../components/MovieCard';
import { useGlobalContext } from '../context/GlobalContext';


export default function HomePage() {
  const { movies, loading } = useGlobalContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Bool Movies</h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <Loader text={'Caricamento in corso...'} />
        </div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[50vh]">
          <Loader  />
        </div>
      )}
    </div>
  )
};
