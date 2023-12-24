import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthResponse, CheckAuthResponse } from '../types/auth';
import { FilmFullDescription, FilmShortDescription, PromoFilmDescription } from '../types/film';
import { Review } from '../types/review';
import { RootState } from './root-reducer';
import { ValidationErrorResponse } from '../types/validation-error';
import { AxiosError } from 'axios';

export const fetchMoviesList = createAsyncThunk<FilmShortDescription[], void, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchMoviesList',
  async (_, { extra: api }) => {
    const response = await api.get<FilmShortDescription[]>('/films');
    return response.data;
  }
);

export const checkAuth = createAsyncThunk<CheckAuthResponse, void, { state: RootState; extra: AxiosInstance }>(
  'auth/checkAuth',
  async (_, { extra: api }) => {
    try {
      const response = await api.get<AuthResponse>('/login');
      return { authorized: true, data: response.data };
    } catch (error) {
      return { authorized: false };
    }
  }
);

export const login = createAsyncThunk<AuthResponse, { email: string; password: string }, { state: RootState; extra: AxiosInstance }>(
  'auth/login',
  async ({ email, password }, { extra: api, rejectWithValue }) => {
    try {
      const response = await api.post<AuthResponse>('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ValidationErrorResponse>;
      if (axiosError.response && axiosError.response.data) {
        return rejectWithValue(axiosError.response.data);
      } else {
        return rejectWithValue('An unexpected error occurred');
      }
    }
  }
);


export const logout = createAsyncThunk<void, void, { state: RootState; extra: AxiosInstance }>(
  'auth/logout',
  async (_, { extra: api }) => {
    await api.delete('/logout');
    localStorage.removeItem('token');
  }
);

export const fetchFilmDetails = createAsyncThunk<FilmFullDescription, string, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchFilmDetails',
  async (filmId, { extra: api }) => {
    const response = await api.get<FilmFullDescription>(`/films/${filmId}`);
    return response.data;
  }
);

export const fetchSimilarMovies = createAsyncThunk<FilmShortDescription[], string, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchSimilarMovies',
  async (filmId, { extra: api }) => {
    const response = await api.get<FilmShortDescription[]>(`/films/${filmId}/similar`);
    return response.data;
  }
);

export const fetchFilmComments = createAsyncThunk<Review[], string, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchFilmComments',
  async (filmId, { extra: api }) => {
    const response = await api.get<Review[]>(`/comments/${filmId}`);
    return response.data;
  }
);

export const postComment = createAsyncThunk<Review, { filmId: string; comment: string; rating: number }, { state: RootState; extra: AxiosInstance }>(
  'movies/postComment',
  async ({ filmId, comment, rating }, { extra: api }) => {
    const response = await api.post<Review>(`/comments/${filmId}`, { comment, rating });
    return response.data;
  }
);

export const fetchPromoFilm = createAsyncThunk<PromoFilmDescription, void, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchPromoFilm',
  async (_, { extra: api }) => {
    const response = await api.get<PromoFilmDescription>('/promo');
    return response.data;
  }
);

export const postFavoriteStatus = createAsyncThunk<FilmFullDescription, { filmId: string; status: number }, { state: RootState; extra: AxiosInstance }>(
  'movies/postFavoriteStatus',
  async ({ filmId, status }, { extra: api }) => {
    const response = await api.post<FilmFullDescription>(`/favorite/${filmId}/${status}`);
    return response.data;
  }
);

export const fetchFavoriteMovies = createAsyncThunk<FilmShortDescription[], void, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchFavoriteMovies',
  async (_, { extra: api }) => {
    const response = await api.get<FilmShortDescription[]>('/favorite');
    return response.data;
  }
);
