// src/pages/GenreMoviesPage.jsx
import { useParams } from "react-router-dom";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import MovieCard from "../components/MovieCard";

const GenreMoviesPage = () => {
  const { genreId } = useParams();
  const movies = useMoviesByGenre(genreId); // Fetches movies for the given genre

  return (
    <div className="movie-cards-container container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default GenreMoviesPage;
