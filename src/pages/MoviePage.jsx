import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import ReviewCard from '../components/ReviewCard';

export default function MoviePage() {
  // Ottiene l'ID del film dai parametri dell'URL
  const { id } = useParams();
  // Recupera lo stato del film selezionato e la funzione per recuperare i dettagli del film
  const { selectedMovie, fetchMovie } = useGlobalContext();

  // Effettua il recupero del film quando cambia l'ID
  useEffect(() => {
    fetchMovie(id);
  }, [id, fetchMovie]);

  // Mostra un messaggio di caricamento finché il film non è disponibile
  if (!selectedMovie) return <p>Caricamento...</p>;

  return (
    <>
      {/* Titolo del film */}
      <h1>{selectedMovie.title}</h1>
      {/* Immagine del film */}
      <img src={selectedMovie.image} alt={selectedMovie.title} />
      
      {/* Sezione delle recensioni */}
      <section>
        <h4>Our community reviews</h4>
        {selectedMovie.reviews?.length > 0 ? (
          // Mappa e visualizza le recensioni disponibili
          selectedMovie.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <p>Ancora nessuna recensione.</p>
        )}
      </section>
    </>
  );
}
