// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';
import switchTracksReducer from './slices/switchTracksSlice';
import favoritesTracksReducer from './slices/favoritesTracksSlice';
import { getAccessTokenAPI } from '../services/GetAccessTokenService';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    switchTrack: switchTracksReducer,
    favorites: favoritesTracksReducer,
    [getAccessTokenAPI.reducerPath]: getAccessTokenAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAccessTokenAPI.middleware),
});

export default store;
