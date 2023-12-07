/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import AppRoutes from './routes';
import GlobalStyle from './GlobalStyle.styles';
import UserData from './context/UserData';
import MediaPlayerContext from './context/MediaPlayerContext';

function App() {
  const [isShowingMediaPlayer, setIsShowingMediaPlayer] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userDataInfo')),
  );

  return (
    <MediaPlayerContext.Provider
      value={{
        isShowing: isShowingMediaPlayer,
        changeIsShowing: setIsShowingMediaPlayer,
      }}
    >
      <UserData.Provider
        value={{
          userInfo: userData,
          changeUserInfo: setUserData,
        }}
      >
        <GlobalStyle />
        <AppRoutes />
      </UserData.Provider>
    </MediaPlayerContext.Provider>
  );
}

export default App;
