import { createReducer } from '@reduxjs/toolkit';
import { AuthResponse } from '../types/auth';
import { AuthorizationStatus } from '../types/authorization-status';
import { setAuthorizationStatus } from './action';
import { login, checkAuth, logout } from './api-actions';

interface AuthState {
  authorizationStatus: AuthorizationStatus;
  userInfo: AuthResponse | null;
}

const initialAuthState: AuthState = {
  authorizationStatus: AuthorizationStatus.NotAuthenticated,
  userInfo: null,
};

export const authReducer = createReducer(initialAuthState, (builder) => {
  builder
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(login.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.Pending;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Authenticated;
      state.userInfo = action.payload;
    })
    .addCase(login.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthenticated;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload.authorized && action.payload.data) {
        state.authorizationStatus = AuthorizationStatus.Authenticated;
        state.userInfo = action.payload.data;
      } else {
        state.authorizationStatus = AuthorizationStatus.NotAuthenticated;
        state.userInfo = null;
      }
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthenticated;
      state.userInfo = null;
    });
});
