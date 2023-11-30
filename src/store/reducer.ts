import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fetchMoviesByGenre, showMoreMovies , setFilteredFilms} from './action';
import { fetchMoviesList } from './api-actions';
import { FilmShortDescription } from '../types/film';

export const MOVIES_BATCH = 8;

export interface MoviesState {
    genre: string;
    allFilms: FilmShortDescription[];
    filteredFilms: FilmShortDescription[];
    displayedMoviesCount: number;
    loading: boolean;
    error: string | null;
}

export const InitialState: MoviesState = {
  genre: 'All genres',
  allFilms: [],
  filteredFilms: [],
  displayedMoviesCount: MOVIES_BATCH,
  loading: false,
  error: null,
};

export const moviesReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.displayedMoviesCount = MOVIES_BATCH;
    })
    .addCase(fetchMoviesByGenre, (state) => {
      // state.loading = true;
      state.error = null;
      if (state.genre === 'All genres') {
        state.filteredFilms = state.allFilms;
      } else {
        state.filteredFilms = state.allFilms.filter((movie) => movie.genre === state.genre);
      }
    })
    .addCase(showMoreMovies, (state) => {
      const newCount = state.displayedMoviesCount + MOVIES_BATCH;
      state.displayedMoviesCount = newCount > state.allFilms.length ? state.allFilms.length : newCount;
    })
    .addCase(fetchMoviesList.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchMoviesList.fulfilled, (state, action) => {
      state.loading = false;
      state.allFilms = action.payload;
    })
    .addCase(fetchMoviesList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed loading movies';
    })
    .addCase(setFilteredFilms, (state, action) => {
      state.filteredFilms = action.payload;
    });
});

