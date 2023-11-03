import { createContext } from 'react';

const UserData = createContext({
  userInfo: '',
  changeUserInfo: () => {},
});

export default UserData;
