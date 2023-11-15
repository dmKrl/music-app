import { getAccessToken, getRefreshAccessToken } from '../api/api';

export default function getToken({ email, password }) {
  console.log('get')
  getAccessToken({ email, password }).then((response) => {
    localStorage.setItem('accessToken', response.access);
    localStorage.setItem('accessRefreshToken', response.refresh);
  });
}

export function refreshAccessToken() {
  console.log('refresh')
  getRefreshAccessToken(localStorage.getItem('accessRefreshToken')).then(
    (responseToken) => {
      localStorage.setItem('newRefreshToken', responseToken);
      console.log(localStorage.getItem('newRefreshToken'));
    },
  );
}
