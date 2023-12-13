import { combineReducers } from '@reduxjs/toolkit';
import { moviesReducer } from './movies-reducer';
import { authReducer } from './auth-reducer';
import { uiReducer } from './ui-reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
