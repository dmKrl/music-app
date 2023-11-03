// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/tracksSlice';

const store = configureStore({
  reducer: { tracks: tracksReducer },
});

export default store;
