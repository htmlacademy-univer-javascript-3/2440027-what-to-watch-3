/* eslint-disable react/display-name */
import { memo } from 'react';
import { FilmShortDescription } from '../../types/film';
import MovieCard from '../movie-card/movie-card';

type MoviesListProps = {
  movies: FilmShortDescription[];
};

const MoviesList = memo(({ movies }: MoviesListProps) => (
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
));

export default MoviesList;
