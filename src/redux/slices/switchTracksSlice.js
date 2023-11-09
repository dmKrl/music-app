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
      action.payload.map((track) => state.allTracks.push(track));
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
