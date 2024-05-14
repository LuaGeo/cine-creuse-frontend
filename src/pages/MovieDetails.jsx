// src/components/MovieDetails.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselRecommendations from "../components/CarouselRecommendations";

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="center-content container">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <div className="overview">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
      <h4>Recommendations</h4>
      <CarouselRecommendations movieId={movieId} />
    </div>
  );
};

export default MovieDetails;
