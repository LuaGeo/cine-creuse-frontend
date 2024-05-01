import useMovies from "../hooks/useMovies";

const HomePage = () => {
  const movies = useMovies();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            width: "300px",
            margin: "10px",
            padding: "10px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "auto" }}
          />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
