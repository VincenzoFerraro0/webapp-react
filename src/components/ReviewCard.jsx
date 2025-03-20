//ReviewCard
export default function ReviewCard({ review }) {
  const { id, name, vote, text } = review;

  return (
    <div key={id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h5 className="font-medium text-gray-800">{name}</h5>
        <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-sm">
          Voto: {vote}
        </span>
      </div>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
