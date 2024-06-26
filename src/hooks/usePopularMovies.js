import { useState, useEffect } from "react";
import axios from "axios";

const usePopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_API_KEY; // Ensure your .env has VITE_API_KEY=your_api_key
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const response = await axios.get(url);
        // console.log("Data fetched:", response.data.results); // Log to see the data fetched
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array ensures this effect only runs once after the initial render

  return movies;
};

export default usePopularMovies;

/* Method suggested in API documentation (usinf fetch instead of axios ): 

import { useState, useEffect } from "react";

const usePopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY; // Ensure your .env has VITE_API_KEY=your_api_key
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data.results); // Log to see the data fetched
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect only runs once after the initial render

  return movies;
};

export default usePopularMovies; */
