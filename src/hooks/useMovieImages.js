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

export default useMovieImages;