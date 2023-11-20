import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/prefer-default-export
export const tracksAPI = createApi({
  reducerPath: 'favoritesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track',
  }),
  tagTypes: ['Track'],
  endpoints: (build) => ({
    fetchAllFavoritesTrack: build.query({
      query: () => ({
        url: '/favorite/all/',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('newRefreshToken')}`,
        },
      }),
    }),
    fetchAllTrack: build.query({
      query: () => ({
        url: '/all/',
      }),
    }),
    addLikeTrack: build.mutation({
      query: (id) => ({
        method: 'POST',
        url: `/${id}/favorite/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('newRefreshToken')}`,
        },
      }),
    }),
    deleteLikeTrack: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/${id}/favorite/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('newRefreshToken')}`,
        },
      }),
    }),
  }),
});
