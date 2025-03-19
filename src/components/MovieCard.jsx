//BookCard
import { Link } from 'react-router-dom';

export default function MovieCard ({ movie }) {
  const { id, title, image } = movie;

  return (
    <>
      <div >
        <img src={image} alt={title} />
        <div >
          <h5>{title}</h5>
          <span>{'author'}</span>
          <p>{'abstract'}</p>
          <Link to={`movies/${id}`}>Read More</Link>
        </div>
      </div>
    </>
  );
}