import { createAPI, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoritesAPI = createAPI({
  reducerPath: 'favoritesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
  }),
  endpoints: (build) => ({
    fetchAllFavoritesTrack: build.query({
      query: () => ({
        headers: {
          Authorization: `Bearer ${localStorage.getItem('newRefreshToken')}`,
        },
      }),
    }),
  }),
});

export const favoritesTracksApi = createAPI({
  reducerPath: 'favoritesAPI',
});
