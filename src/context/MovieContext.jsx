import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const url = import.meta.env.VITE_BASE_URL
const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});

    //funzione fetch per i Film 
    const fetchMovies = () => {
        console.log('Fetching Movies')

        axios
            .get(`${url}/movies`)
            .then((res) => {
                setMovies(res.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }

    //Chiamata fetch Show

    const fetchMovie = () => {
        axios
            .get(`${url}/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.log(error));
    }


    //Invocazione chiamata al caricamento del componente in pagina
    useEffect(fetchMovie, [id]);

    // Valori condivisi nell contesto globale 

    const value = {
        movies,
        movie,
        fetchMovie,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}

// Hook personalizzato per accedere al contesto globale in altri componenti
const useMovieContext = () => useContext(MovieContext)

// Esportazione del GlobalProvider e del custom hook per l'uso nei componenti
export { MovieProvider, useMovieContext }
