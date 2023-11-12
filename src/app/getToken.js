import { getAccessToken, getRefreshAccessToken } from '../api/api';

export default function getToken({ email, password }) {
  getAccessToken({ email, password }).then((response) =>
    localStorage.setItem('accessToken', response),
  );
  getRefreshAccessToken(localStorage.getItem('accessToken')).then(
    (responseToken) =>
      localStorage.setItem('accessRefreshToken', responseToken),
  );
}
