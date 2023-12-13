import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthResponse, CheckAuthResponse } from '../types/auth';
import { FilmFullDescription, FilmShortDescription } from '../types/film';
import { Review } from '../types/review';
import { RootState } from './root-reducer';

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
  async ({ email, password }, { extra: api }) => {
    const response = await api.post<AuthResponse>('/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
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
