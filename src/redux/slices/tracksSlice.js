// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setTrack: (state, action) => action.payload,
  },
});

export const { setTrack } = tracksSlice.actions;

export const selectTracks = (state) => state.tracks;

export default tracksSlice.reducer;
