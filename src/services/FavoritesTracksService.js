import { createAPI, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoritesAPI = createAPI({
  reducerPath: 'favoritesAPI',
  baseQuery: fetchBaseQuery({baseUrl: ''})
});





export const favoritesTracksApi = createAPI({
  reducerPath: 'favoritesAPI',
});
