import SplashImages from "../components/SplashImages";
import usePopularMovies from "../hooks/usePopularMovies";
import CarouselRecommendations from "../components/CarouselRecommendations";

const HomePage = () => {
  const movies = usePopularMovies(); // Fetches and returns the movie data
  const topThreeMovies = movies.slice(0, 3); // Only take the first three movies
  const firstMovieId = movies[0]?.id;

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
        <div className="right-area">{/* Possible future content */}</div>
      </div>
    </div>
  );
};

export default HomePage;
