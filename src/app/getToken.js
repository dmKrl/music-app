import { getRefreshAccessToken } from '../api/api';

// eslint-disable-next-line import/prefer-default-export
export function refreshAccessToken() {
  getRefreshAccessToken(localStorage.getItem('accessRefreshToken')).then(
    (responseToken) => {
      localStorage.setItem('newRefreshToken', responseToken);
      console.log(localStorage.getItem('newRefreshToken'));
    },
  );
}
