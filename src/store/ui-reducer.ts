import { createReducer } from '@reduxjs/toolkit';
import { fetchMoviesList, fetchFilmDetails, fetchPromoFilm, login } from './api-actions';
import { ValidationErrorResponse } from '../types/validation-error';

interface UIState {
  loading: boolean;
  error: string | null;
  loginError: ValidationErrorResponse | null;
}

const initialUIState: UIState = {
  loading: false,
  error: null,
  loginError: null,
};

export const uiReducer = createReducer(initialUIState, (builder) => {
  builder
    .addCase(fetchMoviesList.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchMoviesList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed loading movies';
    })
    .addCase(fetchMoviesList.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(fetchFilmDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchFilmDetails.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(fetchFilmDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed loading movie details';
    })
    .addCase(fetchPromoFilm.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchPromoFilm.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(fetchPromoFilm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed loading promo movie';
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      if (action.payload && typeof action.payload === 'object' && 'errorType' in action.payload) {
        state.loginError = action.payload as ValidationErrorResponse;
      } else {
        state.error = action.error.message || 'Failed login';
      }
    });
});
