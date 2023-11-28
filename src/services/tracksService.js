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
  }),
});
