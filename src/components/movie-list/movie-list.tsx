import MovieCard from '../movie-card/movie-card';
import { FilmShortDescription } from '../../types/film';
// type Movie = {
//   id: string;
//   title: string;
//   imageSrc: string;
//   description: string;
//   releaseDate: string;
//   genre: string;
//   trailer: string;
// };

type MoviesListProps = {
  movies: FilmShortDescription[];
};

function MoviesList({ movies }: MoviesListProps) {
  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.name}
          imageSrc={movie.previewImage}
          trailerSrc={movie.previewVideoLink}
        />
      ))}
    </div>
  );
}

export default MoviesList;
