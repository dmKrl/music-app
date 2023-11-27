/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/prefer-default-export
export const tracksAPI = createApi({
  reducerPath: 'tracksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog',
  }),
  tagTypes: ['Track'],
  endpoints: (build) => ({
    fetchAllFavoritesTrack: build.query({
      query: () => ({
        url: '/track/favorite/all/',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
      providesTags: (result) => ['Track'],
    }),
    fetchAllCollectionTracks: build.query({
      query: (id) => ({
        url: `/selection/${id}`,
      }),
      providesTags: (result) => ['Track'],
    }),
    fetchAllTracks: build.query({
      query: () => ({
        url: `/track/all/`,
      }),
      providesTags: (result) => ['Track'],
    }),
    addLikeTrack: build.mutation({
      query: (id) => ({
        method: 'POST',
        url: `/track/${id}/favorite/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
      invalidatesTags: ['Track'],
    }),
    deleteLikeTrack: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/track/${id}/favorite/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
      invalidatesTags: ['Track'],
    }),
  }),
});
