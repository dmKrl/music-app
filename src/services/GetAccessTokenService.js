/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../redux/slices/authSlice/authSlice';

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      console.debug('Использую токен из стора', { token });
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);
  console.debug('Результат первого запроса', { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!');
    api.dispatch(setAuth(null));
    window.location.navigate('/auth');
  };

  const { auth } = api.getState();
  console.debug('Данные пользователя в сторе', { auth });
  if (!auth.refresh) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions,
  );

  console.debug('Результат запроса на обновление токена', { refreshResult });

  if (!refreshResult.data.access) {
    return forceLogout();
  }

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  console.debug('Повторный запрос завершился успешно');

  return retryResult;
};

export const getAccessTokenAPI = createApi({
  reducerPath: 'getAccessTokenAPI',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    postAccessToken: build.mutation({
      query: ({ email, password }) => ({
        method: 'POST',
        url: '/user/token/',
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
      query: () => ({
        url: '/user/token/refresh/',
        method: 'POST',
        body: JSON.stringify({
          refresh: localStorage.getItem('refresh'),
        }),
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
  }),
});

export const tracksAPI = createApi({
  reducerPath: 'tracksAPI',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Track'],
  endpoints: (build) => ({
    fetchAllFavoritesTrack: build.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
      }),
      providesTags: (result) => ['Track'],
    }),
    fetchAllCollectionTracks: build.query({
      query: (id) => ({
        url: `catalog/selection/${id}`,
      }),
      providesTags: (result) => ['Track'],
    }),
    fetchAllTracks: build.query({
      query: () => ({
        url: `catalog/track/all/`,
      }),
      providesTags: (result) => ['Track'],
    }),
    addLikeTrack: build.mutation({
      query: (id) => ({
        method: 'POST',
        url: `catalog/track/${id}/favorite/`,
      }),
      invalidatesTags: ['Track'],
    }),
    deleteLikeTrack: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `catalog/track/${id}/favorite/`,
      }),
      invalidatesTags: ['Track'],
    }),
  }),
});
