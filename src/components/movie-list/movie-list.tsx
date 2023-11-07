import MovieCard from '../movie-card/movie-card';

type Movie = {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  releaseDate: string;
  genre: string;
  trailer: string;
};

type MoviesListProps = {
  movies: Movie[];
};

function MoviesList({ movies }: MoviesListProps) {
  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imageSrc={movie.imageSrc}
          trailerSrc={movie.trailer}
        />
      ))}
    </div>
  );
}

export default MoviesList;
