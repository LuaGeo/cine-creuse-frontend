// src/components/MovieCard.jsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fullStar,
  faStarHalfAlt,
  faStar as emptyStar,
} from "@fortawesome/free-solid-svg-icons";
import calculateStars from "../hooks/calculateStars";
import useMovieGenres from "../hooks/useMovieGenres";

const MovieCard = ({ movie }) => {
  const genres = useMovieGenres();

  const getGenreNames = (genreIds) => {
    return genres
      .filter((genre) => genreIds.includes(genre.id))
      .map((genre) => genre.name)
      .join(", ");
  };

  const genreNames = getGenreNames(movie.genre_ids);

  const { fullStars, halfStar, emptyStars } = calculateStars(
    movie.vote_average
  );

  return (
    <Link to={`/movie/${movie.id}`}>
      <div key={movie.id} className="carousel-item">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="details-movie-card-container">
          <div>
            <h3>{movie.title}</h3>
            <div className="stars-container">
              {Array.from({ length: fullStars }).map((_, idx) => (
                <FontAwesomeIcon
                  key={`full-${idx}`}
                  icon={fullStar}
                  className="text-gold"
                />
              ))}
              {halfStar > 0 && (
                <FontAwesomeIcon icon={faStarHalfAlt} className="text-gold" />
              )}
              {Array.from({ length: emptyStars }).map((_, idx) => (
                <FontAwesomeIcon
                  key={`empty-${idx}`}
                  icon={emptyStar}
                  className="text-muted"
                />
              ))}
            </div>
          </div>
          <div className="bottom-movie-card">
            <button>+</button>
            <p>{genreNames}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
