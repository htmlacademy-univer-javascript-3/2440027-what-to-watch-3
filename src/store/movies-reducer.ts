import { createReducer } from '@reduxjs/toolkit';
import { FilmShortDescription, FilmFullDescription } from '../types/film';
import { changeGenre, fetchMoviesByGenre, setFilteredFilms, showMoreMovies } from './action';
import { fetchMoviesList, fetchFilmDetails } from './api-actions';

export const MOVIES_BATCH = 8;

interface MoviesState {
  genre: string;
  allFilms: FilmShortDescription[];
  filteredFilms: FilmShortDescription[];
  displayedMoviesCount: number;
  currentFilm: FilmFullDescription | null;
}

const initialMoviesState: MoviesState = {
  genre: 'All genres',
  allFilms: [],
  filteredFilms: [],
  displayedMoviesCount: MOVIES_BATCH,
  currentFilm: null,
};

export const moviesReducer = createReducer(initialMoviesState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.displayedMoviesCount = MOVIES_BATCH;
    })
    .addCase(fetchMoviesByGenre, (state) => {
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
    .addCase(fetchMoviesList.fulfilled, (state, action) => {
      state.allFilms = action.payload;
    })
    .addCase(setFilteredFilms, (state, action) => {
      state.filteredFilms = action.payload;
    })
    .addCase(fetchFilmDetails.fulfilled, (state, action) => {
      state.currentFilm = action.payload;
    });
});
