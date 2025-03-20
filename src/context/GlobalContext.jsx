import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

// Creazione del contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // URL di base per le richieste API, recuperato dalle variabili d'ambiente
    const url = import.meta.env.VITE_BASE_URL;

    // Stato per memorizzare l'elenco dei film
    const [movies, setMovies] = useState([]);
    // Stato per memorizzare il film selezionato
    const [selectedMovie, setSelectedMovie] = useState(null);


    // Funzione per recuperare tutti i film 
    const fetchMovies = () => {
        axios
            .get(`${url}/movies`)
            .then((res) => setMovies(res.data)) // Aggiorna lo stato con i dati ricevuti
            .catch((error) => console.log('Errore nel recupero dei film:', error));
    };

    // Funzione per recuperare un singolo film tramite ID
    const fetchMovie = (id) => {
        axios
            .get(`${url}/movies/${id}`)
            .then((res) => setSelectedMovie(res.data)) // Aggiorna lo stato con il film selezionato
            .catch((error) => console.log('Errore nel recupero del film:', error));
    };

    // Effettua il recupero iniziale dei film al caricamento del componente
    useEffect(fetchMovies, []);

    // Valore del contesto globale che verrà fornito ai componenti figli
    const value = {
        movies,       // Lista dei film
        fetchMovies,  // Funzione per aggiornare i film
        selectedMovie, // Film selezionato
        fetchMovie,   // Funzione per recuperare un singolo film
    };

    return (
        <GlobalContext.Provider value={value}>
            {children} {/* Rende disponibili i dati ai componenti figli */}
        </GlobalContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto globale
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };