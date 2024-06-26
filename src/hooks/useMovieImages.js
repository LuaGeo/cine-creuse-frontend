import { useState, useEffect } from "react";
import axios from "axios";

const useMovieImages = (movieId) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!movieId) return; // Avoid fetching if no movieId is provided

      const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;
      const bearerToken = import.meta.env.VITE_TOKEN;

      try {
        const response = await axios.get(url, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${bearerToken}`,
          },
        });
        console.log("Data fetched:", response.data);
        setImages(response.data.backdrops);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchImages();
  }, [movieId]);

  return images;
};

export default useMovieImages;

/* Method suggested in API documentation (usinf fetch instead of axios ): 

import { useState, useEffect } from "react";

const useMovieImages = (movieId) => {
  const [images, setImages] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;
  const bearerToken = import.meta.env.VITE_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  useEffect(() => {
    if (!movieId) return; // Avoid fetching if no movieId is provided

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data); // Log to see the data fetched
        setImages(data.backdrops);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [movieId]);

  return images;
};

export default useMovieImages; */
