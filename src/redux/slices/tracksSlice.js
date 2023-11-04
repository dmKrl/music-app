/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track: {},
  isPlayingTrack: false,
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.isPlayingTrack = true;
      state.track = action.payload;
    },
  },
});

export const { setTrack } = tracksSlice.actions;

export const selectTracks = (state) => state.tracks.track;

export default tracksSlice.reducer;
