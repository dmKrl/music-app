// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';
import switchTracksReducer from './slices/switchTracksSlice';
import favoritesTracksReducer from './slices/favoritesTracksSlice';
import filterReducer from './slices/filterSlice';
import {
  getAccessTokenAPI,
  fetchAuthorization,
} from '../services/GetAccessTokenService';
import { tracksAPI } from '../services/tracksService';
import { authReducer } from './slices/authSlice';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    filter: filterReducer,
    auth: authReducer,
    switchTrack: switchTracksReducer,
    favorites: favoritesTracksReducer,
    [getAccessTokenAPI.reducerPath]: getAccessTokenAPI.reducer,
    [fetchAuthorization.reducerPath]: fetchAuthorization.reducer,
    [tracksAPI.reducerPath]: tracksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getAccessTokenAPI.middleware,
      fetchAuthorization.middleware,
      tracksAPI.middleware,
    ),
});

export default store;
