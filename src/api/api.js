const SignUpUrl = 'https://skypro-music-api.skyeng.tech/user/signup/';
const getTracksUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/all/';

export async function getTracks() {
  const response = await fetch(getTracksUrl);
  const data = await response.json();
  return data;
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
      return {responseData, response};
    }
    return responseData;
  } catch (error) {
    return error;
  } finally {
    console.log('end');
  }
}
