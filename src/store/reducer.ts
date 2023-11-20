import { createReducer } from '@reduxjs/toolkit';
import { BaseFilm, films } from '../mocks/films';
import { changeGenre, fetchMoviesByGenre } from './action';


export interface MoviesState {
    genre: string;
    movies: BaseFilm[];
}

export const InitialState: MoviesState = {
  genre: 'All genres',
  movies: [],
};

export const moviesReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(fetchMoviesByGenre, (state) => {
      if (state.genre === 'All genres') {
        state.movies = films;
      } else {
        state.movies = films.filter((film) => film.genre === state.genre);
      }
    });
});

