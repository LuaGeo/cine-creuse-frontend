import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SplashImages = ({ movies }) => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
    >
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <p>{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <button>+ Favoris</button>
          <button>Infos...</button>
        </div>
      ))}
    </Carousel>
  );
};

export default SplashImages;
