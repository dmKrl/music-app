const SignUpUrl = 'https://skypro-music-api.skyeng.tech/user/signup/';
const SignInUrl = 'https://skypro-music-api.skyeng.tech/user/login/';
const getTracksUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/all/';
const getAccessTokenUrl = 'https://skypro-music-api.skyeng.tech/user/token/';
const getRefreshAccessTokenUrl =
  'https://skypro-music-api.skyeng.tech/user/token/refresh/';

// Получение всех треков
export async function getTracks() {
  const response = await fetch(getTracksUrl);
  const data = await response.json();
  return data;
}

// Получение токена
export async function getAccessToken({ email, password }) {
  console.log('access token')
  const response = await fetch(getAccessTokenUrl, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  const token = await response.json();
  return token;
}

// Получение рефреш-токена
export async function getRefreshAccessToken(token) {
  const response = await fetch(getRefreshAccessTokenUrl, {
    method: 'POST',
    body: JSON.stringify({
      refresh: token,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  const responseToken = await response.json();
  return responseToken.access;
}
// Запрос на добавление трека в избранные
export async function addTrackInFavorite(token, url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const responseData = await response.json();
  return responseData;
}
// Запрос на удаление трека из избранных
export async function deleteTrackAtFavorite(token, url) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const responseData = await response.json();
  return responseData;
}

// Получение избранных треков
export async function getFavoritesTracks(token, url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
}

// Регистрация пользователя
export async function postRegister({ email, password, username }) {
  try {
    const response = await fetch(SignUpUrl, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        'content-type': 'application/json',
      },
    });
    const responseData = await response.json();
    if (response.status === 400) {
      return { responseData, response };
    }
    return responseData;
  } catch (error) {
    return error;
  }
}

// Логин в приложение
export async function postLogin({ email, password }) {
  try {
    const response = await fetch(SignInUrl, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    });

    const responseData = await response.json();
    if (response.status === 400) {
      return { responseData, response };
    }
    return responseData;
  } catch (error) {
    return error;
  }
}
