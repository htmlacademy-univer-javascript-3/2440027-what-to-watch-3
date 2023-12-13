import { createReducer } from '@reduxjs/toolkit';
import { fetchMoviesList, fetchFilmDetails } from './api-actions';

interface UIState {
  loading: boolean;
  error: string | null;
}

const initialUIState: UIState = {
  loading: false,
  error: null,
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
    });
});
