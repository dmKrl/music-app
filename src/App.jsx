/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle.styles';
import IsLoadingPageContext from './context/IsLoadingPageContext';
import AppRoutes from './routes';
import getTracks from './api/api';
import TracksContext from './context/TracksContext';

function App() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [allTracks, setAllTracks] = useState([]);
  useEffect(() => {
    getTracks().then((tracks) => {
      setAllTracks(tracks);
      setLoadingPage(!loadingPage);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IsLoadingPageContext.Provider value={{ isLoading: loadingPage }}>
      <TracksContext.Provider value={{ allTracks }}>
        <GlobalStyle />
        <AppRoutes />
      </TracksContext.Provider>
    </IsLoadingPageContext.Provider>
  );
}

export default App;
