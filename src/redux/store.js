// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';
import switchTracksReducer from './slices/switchTracksSlice';
import favoritesTracksReducer from './slices/favoritesTracksSlice';
import filterReducer from './slices/filterSlice';
import { getAccessTokenAPI } from '../services/GetAccessTokenService';
import { tracksAPI } from '../services/tracksService';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    filter: filterReducer,
    switchTrack: switchTracksReducer,
    favorites: favoritesTracksReducer,
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
