const SignUpUrl = 'https://skypro-music-api.skyeng.tech/user/signup/';
const SignInUrl = 'https://skypro-music-api.skyeng.tech/user/login/';

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
