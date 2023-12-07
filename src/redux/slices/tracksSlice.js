/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track: {},
  arrayTracks: [],
  isPlayingTrack: false,
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },
    setArrayTracks: (state, action) => {
      state.arrayTracks = action.payload;
    },
    toggleIsPlaying: (state, action) => {
      state.isPlayingTrack = action.payload;
    },
  },
});

export const { setTrack, setArrayTracks, toggleIsPlaying } =
  tracksSlice.actions;

export const selectTracks = (state) => state.tracks.track;
export const selectArrayTracks = (state) => state.tracks.arrayTracks;
export const selectIsPlaying = (state) => state.tracks.isPlayingTrack;

export default tracksSlice.reducer;
