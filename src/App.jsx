/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes';
import GlobalStyle from './GlobalStyle.styles';
import IsLoadingPageContext from './context/IsLoadingPageContext';
import { addTracks } from './redux/slices/switchTracksSlice';
import { getTracks } from './api/api';
import MediaPlayerContext from './context/MediaPlayerContext';
import UserData from './context/UserData';

function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isLoadingError, setIsLoadingError] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(false);

  const [isShowingMediaPlayer, setIsShowingMediaPlayer] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userDataInfo')),
  );
  const dispatch = useDispatch();
  const getTracksCheckErrors = () => {
    getTracks()
      .then((tracks) => {
        setIsLoadingData(true);
        dispatch(addTracks(tracks));
      })
      .catch(() => {
        setIsLoadingError(
          'Произошла ошибка получения списка треков, попробуйте обновить страницу',
        );
      })
      .finally(() => {
        setIsLoadingPage(false);
      });
  };
  useEffect(() => { 
    if (!isLoadingData) {
      getTracksCheckErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IsLoadingPageContext.Provider
      value={{ isLoading: isLoadingPage, isLoadingError }}
    >   
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
    </IsLoadingPageContext.Provider>
  );
}

export default App;
