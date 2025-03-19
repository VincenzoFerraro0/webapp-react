import MovieCard from '../components/MovieCard';
import { useGlobalContext } from '../context/GlobalContext';
;

export default function HomePage() {
  const { movies } = useGlobalContext();

  return (
    <>
      <h1>Bool Movies</h1>
      <h2>Qui andranno tutti i film</h2>
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p>Caricamento in corso...</p>
        )}
      </div>
    </>
  );
}
