/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameTrack: '',
  authorTrack: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setNameTrackFilter: (state, action) => {
      state.nameTrack = action.payload;
    },
    setAuthorTrackFilter: (state, action) => {
      state.authorTrack = action.payload;
    },
  },
});

export const { setNameTrackFilter, setAuthorTrackFilter } =
  filterSlice.actions;

export const selectNameTrackFilter = (state) => state.filter.nameTrack;
export const selectAuthorTrackFilter = (state) => state.filter.authorTrack;

export default filterSlice.reducer;
