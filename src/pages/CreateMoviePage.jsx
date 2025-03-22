
import MovieForm from "../components/MovieForm";


export default function CreateMoviePage() {
 
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 max-w-2xl mx-auto">
      <h5 className="text-lg font-semibold mb-4">Aggiungi un Film</h5>
      <MovieForm />
    </div>
  );
}