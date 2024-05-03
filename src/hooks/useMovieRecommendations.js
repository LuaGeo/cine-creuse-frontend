import { useState, useEffect } from "react";

const useMovieRecommendations = (movieId) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!movieId) return; // Prevent fetching if no movieId is provided

    const apiKey = import.meta.env.VITE_API_KEY; // Ensure your API key is stored securely
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

export default useMovieRecommendations;
