/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle.styles';
import IsLoadingPageContext from './context/IsLoadingPageContext';
import AppRoutes from './routes';
import { getTracks } from './api/api';
import TracksContext from './context/TracksContext';
import MediaPlayerContext from './context/MediaPlayerContext';
import UserData from './context/UserData';

function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isLoadingError, setIsLoadingError] = useState('');
  const [allTracks, setAllTracks] = useState([]);
  const [showInfoAboutTrack, setShowInfoAboutTrack] = useState({
    name: '',
    author: '',
  });

  const [isShowingMediaPlayer, setIsShowingMediaPlayer] = useState(false);

  const getTracksCheckErrors = () => {
    getTracks()
      .then((tracks) => {
        setAllTracks(tracks);
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
    getTracksCheckErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IsLoadingPageContext.Provider
      value={{ isLoading: isLoadingPage, isLoadingError }}
    >
      <TracksContext.Provider value={{ allTracks }}>
        <MediaPlayerContext.Provider
          value={{
            showInfoAboutTrack,
            changeMediaPlayerInfo: setShowInfoAboutTrack,
            isShowing: isShowingMediaPlayer,
            changeIsShowing: setIsShowingMediaPlayer,
          }}
        >
          <UserData.Provider
            value={{ userInfo: JSON.parse(localStorage.getItem('userData')) }}
          >
            <GlobalStyle />
            <AppRoutes />
          </UserData.Provider>
        </MediaPlayerContext.Provider>
      </TracksContext.Provider>
    </IsLoadingPageContext.Provider>
  );
}

export default App;
