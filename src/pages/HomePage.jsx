import SplashImages from "../components/SplashImages";
import usePopularMovies from "../hooks/usePopularMovies";
import CarouselRecommendations from "../components/CarouselRecommendations";
import { useNavigate } from "react-router-dom";
import useMovieGenres from "../hooks/useMovieGenres";

const HomePage = () => {
  const movies = usePopularMovies(); // Fetches and returns the movie data
  const topThreeMovies = movies.slice(0, 5); // Only take the first three movies
  const firstMovieId = movies[0]?.id;
  const genres = useMovieGenres();
  const navigate = useNavigate();

  const handleGenreClick = (genreId) => {
    navigate(`/genre/${genreId}`); // Navigate to a new route that displays all movies for this genre
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="left-sidebar">{/* Content to be decided */}</div>
        <div className="center-content">
          <div className="splash-container">
            <SplashImages movies={topThreeMovies} />
            <h2>Recommendations</h2>
            <CarouselRecommendations movieId={firstMovieId} />
          </div>
        </div>
        <div className="right-area">
          <h2>Genres</h2>
          {genres.map((genre) => (
            <button key={genre.id} onClick={() => handleGenreClick(genre.id)}>
              {genre.name}
            </button>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
