import { useState } from 'react';
import GlobalStyle from './GlobalStyle.styles';
import AppRoutes from './routes';

function App() {
  // const [user, setUser] = useState(false);
  // const handleLogin = () => {
  //   localStorage.setItem('user', true);
  //   console.log(localStorage.getItem('user'))
  //   setUser(localStorage.getItem('user'));
  // };
  const [isAllowed, setIsAllowed] = useState(false);
  const handleLogin = () => {
    setIsAllowed(!isAllowed);
  };
  return (
    <>
      <GlobalStyle />
      <AppRoutes handleLogin={handleLogin} isAllowed={isAllowed} />
    </>
  );
}

export default App;
