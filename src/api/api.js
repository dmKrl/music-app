const SignUpUrl = 'https://skypro-music-api.skyeng.tech/user/signup/';
const SignInUrl = 'https://skypro-music-api.skyeng.tech/user/login/';
const getTracksUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/all/';
const getAccessTokenUrl = 'https://skypro-music-api.skyeng.tech/user/token/';
const getRefreshAccessTokenUrl =
  'https://skypro-music-api.skyeng.tech/user/token/refresh/';

export async function getTracks() {
  const response = await fetch(getTracksUrl);
  const data = await response.json();
  return data;
}

export async function getAccessToken({ email, password }) {
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
  return token.refresh;
}

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
