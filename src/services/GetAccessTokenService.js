/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../redux/slices/authSlice';

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
    window.location.navigate('/login');
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
