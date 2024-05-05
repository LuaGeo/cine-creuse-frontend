import { useState, useEffect } from "react";
import axios from "axios";

const useMovieRecommendations = (movieId) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!movieId) return; // Prevent fetching if no movieId is provided

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setRecommendations(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie recommendations:", error);
      });
  }, [movieId]); // Fetch new recommendations when movieId changes

  return recommendations;
};

export default useMovieRecommendations;

/* Method suggested in API documentation (usinf fetch instead of axios ):

import { useState, useEffect } from "react";

const useMovieRecommendations = (movieId) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!movieId) return; // Prevent fetching if no movieId is provided

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRecommendations(data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie recommendations:", error);
      });
  }, [movieId]); // Fetch new recommendations when movieId changes

  return recommendations;
};

export default useMovieRecommendations;*/
