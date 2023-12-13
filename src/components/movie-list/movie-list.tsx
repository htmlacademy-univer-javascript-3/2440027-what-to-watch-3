/* eslint-disable react/display-name */
import MovieCard from '../movie-card/movie-card';
import { FilmShortDescription } from '../../types/film';
import { memo } from 'react';

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
