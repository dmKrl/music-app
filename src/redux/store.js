// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';
import switchTracksReducer from './slices/switchTracksSlice';
import filterReducer from './slices/filterSlice';
import {
  getAccessTokenAPI,
  tracksAPI,
} from '../services/GetAccessTokenService';
import { authReducer } from './slices/authSlice';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    filter: filterReducer,
    auth: authReducer,
    switchTrack: switchTracksReducer,
    [getAccessTokenAPI.reducerPath]: getAccessTokenAPI.reducer,
    [tracksAPI.reducerPath]: tracksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getAccessTokenAPI.middleware,
      tracksAPI.middleware,
    ),
});

export default store;
