import { useState } from 'react';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imageSrc={movie.imageSrc}
          description={movie.description}
          releaseDate={movie.releaseDate}
          genre={movie.genre}
          onMouseEnter={() => setActiveCard(movie.id)}
          onMouseLeave={() => setActiveCard(null)}
        />
      ))}
    </div>
  );
}

export default MoviesList;
