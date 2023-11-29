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
      state.filterAuthor.push(action.payload);
    },
    deleteAuthorTrackFilter: (state, action) => ({
      ...state,
      filterAuthor: state.filterAuthor.filter(
        (author) => author !== action.payload,
      ),
    }),
    setGenreTrackFilter: (state, action) => {
      state.filterGenre.push(action.payload);
    },
    deleteGenreTrackFilter: (state, action) => ({
      ...state,
      filterGenre: state.filterGenre.filter(
        (genre) => genre !== action.payload,
      ),
    }),
  },
});

export const {
  setNameTrackFilter,
  setSortTrackFilter,
  setAuthorTrackFilter,
  setGenreTrackFilter,
  deleteAuthorTrackFilter,
  deleteGenreTrackFilter,
} = filterSlice.actions;

export const selectNameTrackFilter = (state) =>
  state.filter.filterSearchingInput.nameTrack;
export const selectSortTrackFilter = (state) => state.filter.filterSort;
export const selectAuthorTrackFilter = (state) => state.filter.filterAuthor;
export const selectGenreTrackFilter = (state) => state.filter.filterGenre;

export default filterSlice.reducer;
