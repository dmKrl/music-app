import { useState } from 'react';
import GlobalStyle from './GlobalStyle.styles';
import AppRoutes from './routes';

function App() {
  const [user, setUser] = useState(false);
  const handleLogin = () => {
    localStorage.setItem('user', Boolean(true));
    setUser(localStorage.getItem('user'));
  };
  const handleLogout = () => {
    localStorage.setItem('user', Boolean(false));
    setUser(localStorage.getItem('user'));
  };
  // const [isAllowed, setIsAllowed] = useState(false);
  // const handleLogin = () => {
  //   setIsAllowed(!isAllowed);
  // };
  return (
    <>
      <GlobalStyle />
      <AppRoutes
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        isAllowed={Boolean(user)}
      />
    </>
  );
}

export default App;
