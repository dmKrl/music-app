/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTracks: [],
  isShuffled: false,
};

export const switchTracksSlice = createSlice({
  name: 'switchTrack',
  initialState,
  reducers: {
    addTracks: (state, action) => {
      state.allTracks = action.payload;
    },
    toggleIsShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
  },
});

export const { addTracks, toggleIsShuffled } = switchTracksSlice.actions;

export const selectAllTracks = (state) => state.switchTrack.allTracks;
export const selectIsShuffled = (state) => state.switchTrack.isShuffled;

export default switchTracksSlice.reducer;
