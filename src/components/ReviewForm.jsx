import axios from 'axios';
import { useState } from 'react';

export default function ReviewForm({ movie_id, reloadReviews }) {
  //endpoint
  const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`;

  const initialValue = {
    name: 'Anonimo',
    text: 'lorem ipsum frontend',
    vote: 4,
  };

  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(endpoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setFormData(initialValue);
        //ricaricare le recensioni da zero
        reloadReviews();
      })
      .catch((err) => console.log(err));
  };

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h5 className="text-lg font-semibold mb-4">Aggiungi una recensione</h5>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            value={formData.name}
            onChange={setFieldValue}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recensione</label>
          <textarea
            name="text"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            value={formData.text}
            onChange={setFieldValue}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Voto (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            name="vote"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            value={formData.vote}
            onChange={setFieldValue}
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium"
        >
          Invia Recensione
        </button>
      </form>
    </div>
  );
}