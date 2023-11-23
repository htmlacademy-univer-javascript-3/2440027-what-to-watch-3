import { createReducer } from '@reduxjs/toolkit';
import { BaseFilm, films } from '../mocks/films';
import { changeGenre, fetchMoviesByGenre, showMoreMovies } from './action';

export const MOVIES_BATCH = 8;

export interface MoviesState {
    genre: string;
    movies: BaseFilm[];
    displayedMoviesCount: number;
}

export const InitialState: MoviesState = {
  genre: 'All genres',
  movies: [],
  displayedMoviesCount: MOVIES_BATCH,
};

export const moviesReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.displayedMoviesCount = MOVIES_BATCH;
    })
    .addCase(fetchMoviesByGenre, (state) => {
      if (state.genre === 'All genres') {
        state.movies = films;
      } else {
        state.movies = films.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(showMoreMovies, (state) => {
      const newCount = state.displayedMoviesCount + MOVIES_BATCH;
      state.displayedMoviesCount = newCount > state.movies.length ? state.movies.length : newCount;
    });
});

