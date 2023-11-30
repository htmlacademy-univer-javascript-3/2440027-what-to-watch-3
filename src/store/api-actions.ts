import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmShortDescription } from '../types/film';
import { RootState } from './state';
import { AxiosInstance } from 'axios';


export const fetchMoviesList = createAsyncThunk<FilmShortDescription[], void, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchMoviesList',
  async (_, { extra: api }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await api.get<FilmShortDescription[]>('/films');
    return response.data;
  }
);
