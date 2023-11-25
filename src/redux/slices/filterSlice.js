/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  author: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.name = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setNameFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions;

export const selectNameFilter = (state) => state.filter.name;
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
