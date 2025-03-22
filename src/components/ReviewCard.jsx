import StarRating from "./StarRating";

export default function ReviewCard({ review }) {
  const { name, vote, text } = review;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 mb-4">

      {/* Nome utente */}
      <h5 className="font-medium text-gray-800 mt-2">{name}</h5>
      {/* Testo della recensione */}
      <p className="text-gray-600 text-sm mb-3">{text}</p>

      {/* Stelle e voto numerico */}
      <div className="flex justify-center gap-2 items-center">
        <StarRating vote={vote} />
        <span className="text-gray-700 text-md font-medium">{vote}/5</span>
      </div>

    </div>
  );
}
