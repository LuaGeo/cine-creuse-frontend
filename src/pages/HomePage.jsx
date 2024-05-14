import SplashImages from "../components/SplashImages";
import usePopularMovies from "../hooks/usePopularMovies";
import CarouselRecommendations from "../components/CarouselRecommendations";
import GenreButtons from "../components/GenreButtons";

const HomePage = () => {
  const movies = usePopularMovies(); // Fetches and returns the movie data
  const topThreeMovies = movies.slice(0, 5); // Only take the first three movies
  const firstMovieId = movies[0]?.id;

  return (
    <div className="container">
      <div className="main-container">
        <div className="left-sidebar">{/* Content to be decided */}</div>
        <div className="center-content">
          <div className="splash-container">
            <SplashImages movies={topThreeMovies} />
          </div>
          <h2>Recommendations</h2>
          <CarouselRecommendations movieId={firstMovieId} />
        </div>
        <GenreButtons />
      </div>
    </div>
  );
};

export default HomePage;
