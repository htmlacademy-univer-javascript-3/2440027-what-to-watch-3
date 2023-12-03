import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmShortDescription } from '../types/film';
import { RootState } from './state';
import { AxiosInstance } from 'axios';
import { AuthResponse, CheckAuthResponse } from '../types/auth';


export const fetchMoviesList = createAsyncThunk<FilmShortDescription[], void, { state: RootState; extra: AxiosInstance }>(
  'movies/fetchMoviesList',
  async (_, { extra: api }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const response = await api.get<FilmShortDescription[]>('/films');
    return response.data;
  }
);


export const checkAuth = createAsyncThunk<CheckAuthResponse, void, { state: RootState; extra: AxiosInstance } >(
  'auth/checkAuth',
  async (_, { extra: api }) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return { authorized: false };
    }

    try {
      const response = await api.get<AuthResponse>('/login', {
        headers: {
          'X-Token': token,
        }
      });
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
  async (_, { extra: api, getState }) => {
    const token = getState().movies.userInfo?.token;
    if (token) {
      await api.delete('/logout', {
        headers: { 'X-Token': token }
      });
      localStorage.removeItem('token');
    }
  }
);
