import useMovieRecommendations from "../hooks/useMovieRecommendations.js";

const CarouselRecommendations = ({ movieId }) => {
  const recommendations = useMovieRecommendations(movieId);

  return (
    <div className="carousel">
      {recommendations.length > 0 ? (
        recommendations.map((movie) => (
          <div key={movie.id} className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default CarouselRecommendations;
