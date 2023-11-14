import { createContext } from 'react';

const UserData = createContext({
  userInfo: '',
  changeUserInfo: () => {},
  getTracks: () => {},
});

export default UserData;
