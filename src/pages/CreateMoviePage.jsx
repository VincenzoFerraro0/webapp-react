import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function CreateMoviePage() {
  const initialData = {
    title: '',
    director: '',
    image: null,
    abstract: '',
    genre: '',
    release_year: '',
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/movies', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 max-w-2xl mx-auto">
      <h5 className="text-lg font-semibold mb-4">Aggiungi un Film</h5>

      <section id="movie-form">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Titolo:</label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={setFieldValue}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Regista:</label>
            <input
              name="director"
              type="text"
              value={formData.director}
              onChange={setFieldValue}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Immagine:</label>
            <input
              name="image"
              type="file"
              onChange={setFieldValue}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trama:</label>
            <textarea
              value={formData.abstract}
              name="abstract"
              onChange={setFieldValue}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Genere:</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={setFieldValue}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Seleziona Genere</option>
              <option value="Action">Action</option>
              <option value="Comedy">Commedia</option>
              <option value="Drama">Dramma</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romantico</option>
              <option value="Sci-Fi">Fantascienza</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Thriller">Thriller</option>
              <option value="Documentary">Documentario</option>
              <option value="Animation">Animazione</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Anno di uscita:</label>
            <select
              name="release_year"
              value={formData.release_year}
              onChange={setFieldValue}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Seleziona anno</option>
              {Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              to="/"
              className="w-full py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors text-center font-medium"
            >
              Annulla
            </Link>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium"
            >
              Aggiungi Film
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}