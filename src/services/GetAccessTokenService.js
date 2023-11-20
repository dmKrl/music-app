/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getAccessTokenAPI = createApi({
  reducerPath: 'getAccessTokenAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/user/token/',
  }),
  endpoints: (build) => ({
    postAccessToken: build.mutation({
      query: ({ email, password }) => ({
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
    postRefreshAccessToken: build.mutation({
      query: ({ token }) => ({
        url: '/refresh',
        method: 'POST',
        body: JSON.stringify({
          refresh: token,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
  }),
});
