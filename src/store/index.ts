import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import getAPIClient from '../services/api';


const api = getAPIClient();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export default store;
