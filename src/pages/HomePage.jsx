import SplashImages from "../components/SplashImages";
import usePopularMovies from "../hooks/usePopularMovies";

const HomePage = () => {
  const movies = usePopularMovies(); // Fetches and returns the movie data
  const topThreeMovies = movies.slice(0, 3); // Only take the first three movies

  return (
    <div className="main-container">
      <div className="left-sidebar">{/* Content to be decided */}</div>
      <div className="center-content">
        <div className="splash-container">
          <SplashImages movies={topThreeMovies} />
        </div>
      </div>
      <div className="right-area">{/* Possible future content */}</div>
    </div>
  );
};

export default HomePage;
