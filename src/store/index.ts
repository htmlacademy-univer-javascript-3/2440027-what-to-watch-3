import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './reducer';
import getAPIClient from '../services/api';


const api = getAPIClient();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export default store;
