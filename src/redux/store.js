// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';
import switchTracksReducer from './slices/switchTracksSlice';
import favoritesTracksReducer from './slices/favoritesTracksSlice';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    switchTrack: switchTracksReducer,
    favorites: favoritesTracksReducer,
  },
});

export default store;
