// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';
import switchTracksReducer from './slices/switchTracksSlice';

const store = configureStore({
  reducer: { tracks: tracksReducer, switchTrack: switchTracksReducer },
});

export default store;
