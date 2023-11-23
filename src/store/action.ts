import { createAction } from '@reduxjs/toolkit';


export const changeGenre = createAction<string>('movies/changeGenre');
export const fetchMoviesByGenre = createAction<string>('movies/fetchMoviesByGenre');
export const showMoreMovies = createAction('movies/showMoreMovies');

