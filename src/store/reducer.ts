import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fetchMoviesByGenre, showMoreMovies , setFilteredFilms, setAuthorizationStatus} from './action';
import { fetchMoviesList, login, checkAuth, logout } from './api-actions';
import { FilmShortDescription } from '../types/film';
import { AuthorizationStatus } from '../types/authorization-status';
import { AuthResponse } from '../types/auth';

export const MOVIES_BATCH = 8;

export interface MoviesState {
    genre: string;
    allFilms: FilmShortDescription[];
    filteredFilms: FilmShortDescription[];
    displayedMoviesCount: number;
    loading: boolean;
    error: string | null;
    authorizationStatus: AuthorizationStatus;
    userInfo: AuthResponse | null;
}

export const InitialState: MoviesState = {
  genre: 'All genres',
  allFilms: [],
  filteredFilms: [],
  displayedMoviesCount: MOVIES_BATCH,
  loading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.NotAuthenticated,
  userInfo: null,
};

export const moviesReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.displayedMoviesCount = MOVIES_BATCH;
    })
    .addCase(fetchMoviesByGenre, (state) => {
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(login.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.Pending;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Authenticated;
      state.userInfo = action.payload;
    })
    .addCase(login.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthenticated;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload.authorized && action.payload.data) {
        state.authorizationStatus = AuthorizationStatus.Authenticated;
        state.userInfo = action.payload.data;
      } else {
        state.authorizationStatus = AuthorizationStatus.NotAuthenticated;
        state.userInfo = null;
      }
    })
    .addCase(checkAuth.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthenticated;
      state.userInfo = null;
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthenticated;
      state.userInfo = null;
    });
});

