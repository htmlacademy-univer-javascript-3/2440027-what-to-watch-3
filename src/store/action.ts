import { createAction } from '@reduxjs/toolkit';
import { FilmShortDescription } from '../types/film';

export const changeGenre = createAction<string>('movies/changeGenre');
export const fetchMoviesByGenre = createAction<string>('movies/fetchMoviesByGenre');
export const showMoreMovies = createAction('movies/showMoreMovies');
export const setFilteredFilms = createAction<FilmShortDescription[]>('movies/setFilteredFilms');
