/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterSearchingInput: {
    nameTrack: '',
  },
  filterSort: { sort: '' },
  filterAuthor: [],
  filterGenre: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setNameTrackFilter: (state, action) => {
      state.filterSearchingInput.nameTrack = action.payload;
    },
    setSortTrackFilter: (state, action) => {
      state.filterSort.sort = action.payload;
    },
    setAuthorTrackFilter: (state, action) => {
      if (state.filterAuthor.find((el) => el === action.payload)) {
        return state.filterAuthor.filter((author) => author !== action.payload);
      }
      state.filterAuthor.push(action.payload);
    },
    setGenreTrackFilter: (state, action) => {
      if (state.find((el) => el === action.payload)) {
        return state.filterGenre.filter((genre) => genre !== action.payload);
      }
      state.filterGenre.push(action.payload);
    },
  },
});

export const {
  setNameTrackFilter,
  setSortTrackFilter,
  setAuthorTrackFilter,
  setGenreTrackFilter,
  set,
} = filterSlice.actions;

export const selectNameTrackFilter = (state) =>
  state.filter.filterSearchingInput.nameTrack;
export const selectSortTrackFilter = (state) => state.filter.filterAuthor;
export const selectAuthorTrackFilter = (state) => state.filter.filterAuthor;
export const selectGenreTrackFilter = (state) => state.filter.filterGenre;

export default filterSlice.reducer;
