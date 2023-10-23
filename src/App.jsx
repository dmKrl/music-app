import { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle.styles';
import IsLoadingPageContext from './context/IsLoadingPageContext';
import AppRoutes from './routes';
import getTracks from './api/api';

function App() {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    getTracks().then((tracks) => {
      console.log(tracks);
      setLoadingPage(!loadingPage);
    });
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IsLoadingPageContext.Provider value={{ isLoading: loadingPage }}>
      <GlobalStyle />
      <AppRoutes />
    </IsLoadingPageContext.Provider>
  );
}

export default App;
