import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const switchTracksSlice = createSlice({
  name: 'switchTrack',
  initialState,
  reducers: {
    addTracks: (state, action) => {
      action.payload.map((track) => state.push(track));
    },
  },
});

export const { addTracks } = switchTracksSlice.actions;

export const selectAllTracks = (state) => state.switchTrack;

export default switchTracksSlice.reducer;
