import useMovieImages from "../hooks/useMovieImages";

const FavoritesPage = () => {
  const movieId = 80;
  const images = useMovieImages(movieId);

  return (
    <div>
      <h1>Favorites Page</h1>
      <div>
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                alt="Movie Image"
              />
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
