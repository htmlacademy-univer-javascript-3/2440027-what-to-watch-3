import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './reducer';


const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export default store;
