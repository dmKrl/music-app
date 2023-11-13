/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFavoritesTracks } from '../../api/api';

const accessToken = localStorage.getItem('newRefreshToken');

const initialState = {
  favoritesTracks: [],
  isToggleFavorites: false,
};

export const fetchFavoritesTracks = createAsyncThunk(
  'favorites/fetchFavoritesTracks',
  async (url, thunkAPI) => {
    try {
      const res = await getFavoritesTracks(accessToken, url);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const favoritesTracksSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoritesTracks.pending, (action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchFavoritesTracks.fulfilled, (state, action) => {
      action.payload.map((track) =>
        state.favoritesTracks.push({ ...track, isFavorite: true }),
      );
    });
    builder.addCase(fetchFavoritesTracks.rejected, (action) => {
      console.log(action.payload);
    });
  },
});

export const { addTracks, toggleIsShuffled } = favoritesTracksSlice.actions;

export const selectFavoritesTracks = (state) => state.favorites.favoritesTracks;
export const selectIsToggleFavorites = (state) =>
  state.favorites.isToggleFavorites;

export default favoritesTracksSlice.reducer;
