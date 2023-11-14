/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addTrackInFavorite,
  deleteTrackAtFavorite,
  getFavoritesTracks,
} from '../../api/api';
import { refreshAccessToken } from '../../app/getToken';

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
      if (res.code === 'token_not_valid') {
        throw new Error('Error');
      }
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const fetchAddLikeFavoriteTrack = createAsyncThunk(
  'favorites/fetchAddLikeFavoriteTrack',
  async (url, thunkAPI) => {
    try {
      const res = await addTrackInFavorite(accessToken, url);
      if (res.code === 'token_not_valid') {
        throw new Error('Error');
      }
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const fetchDeleteLikeTrack = createAsyncThunk(
  'favorites/fetchDeleteFavoriteTrack',
  async (url, thunkAPI) => {
    try {
      const res = await deleteTrackAtFavorite(accessToken, url);
      if (res.code === 'token_not_valid') {
        throw new Error('Error');
      }
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
    builder.addCase(fetchFavoritesTracks.fulfilled, (state, action) => {
      state.favoritesTracks = action.payload;
    });
    builder.addCase(fetchFavoritesTracks.rejected, (state) => {
      state.favoritesTracks =
        'Произошла ошибка запроса, обновите страницу или перезайдите в приложение';
    });

    // Добавление лайка
    builder.addCase(fetchAddLikeFavoriteTrack.rejected, () => {
      refreshAccessToken();
    });

    // Удаление лайка
    builder.addCase(fetchDeleteLikeTrack.rejected, () => {
      refreshAccessToken();
    });
  },
});

export const { addTracks, toggleIsShuffled } = favoritesTracksSlice.actions;

export const selectFavoritesTracks = (state) => state.favorites.favoritesTracks;
export const selectIsToggleFavorites = (state) =>
  state.favorites.isToggleFavorites;

export default favoritesTracksSlice.reducer;
