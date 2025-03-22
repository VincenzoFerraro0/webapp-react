import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';
import StarRating from '../components/StarRating';

export default function MoviePage() {
  // Ottiene l'ID del film dai parametri dell'URL
  const { id } = useParams();
  // Recupera lo stato del film selezionato e la funzione per recuperare i dettagli del film
  const { selectedMovie, fetchMovie } = useGlobalContext();

  // Effettua il recupero del film quando cambia l'ID
  useEffect(() => {
    fetchMovie(id);
  }, [id, fetchMovie]);

  //Rendering html delle reviews
  const renderReviews = () => {
    return selectedMovie.reviews?.map((review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  };


  // Mostra un messaggio di caricamento finché il film non è disponibile
  if (!selectedMovie) return <p>Caricamento...</p>;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            {/* Titolo del film */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedMovie.title}</h1>
            {/* Immagine del film */}
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="mx-auto rounded-lg shadow-lg max-h-96 object-cover"
            />

            {/* Sezione delle recensioni */}
            <section className="mb-12">
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Our community reviews</h4>
              <div className="space-y-4" >
                <h5>Media recensioni</h5>
                <div className='flex items-center justify-center gap-3'>
                  {selectedMovie?.reviews && <StarRating vote={selectedMovie.average_vote} />}
                  <span className="text-gray-700 text-md font-medium">{selectedMovie.average_vote}/5</span>
                </div>

                {renderReviews()}
              </div>
            </section>

            {/* //form review */}
            <section className="mb-12">
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Lascia una recensione</h4>
              {selectedMovie?.id && <ReviewForm movie_id={selectedMovie.id} reloadReviews={fetchMovie} />}
            </section>
          </div>
        </div>
      </div>

    </>
  );
}
