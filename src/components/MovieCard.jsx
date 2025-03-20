//BookCard
import { Link } from 'react-router-dom';

export default function MovieCard ({ movie }) {
  const { id, title, image } = movie;

  return (
    <>
      <div  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
            src={image} 
            alt={title}
            className="w-full object-cover"

        />
        <div className="p-4" >
          <h5 className="text-lg font-semibold text-gray-800 mb-2" >{title}</h5>
          
          <Link className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors" to={`movies/${id}`}>Read More</Link>
        </div>
      </div>
    </>
  );
}