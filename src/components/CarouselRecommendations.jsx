import useMovieRecommendations from "../hooks/useMovieRecommendations.js";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard.jsx";

const CarouselRecommendations = ({ movieId }) => {
  const recommendations = useMovieRecommendations(movieId);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {recommendations.length > 0 ? (
          recommendations.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>
    </div>
  );
};

export default CarouselRecommendations;
