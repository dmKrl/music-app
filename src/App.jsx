import GlobalStyle from './GlobalStyle.styles';
import AppRoutes from './routes';

function App() {
  const handleLogin = () => {
    localStorage.setItem('user', 'user');
    localStorage.getItem('user');
  };
  const handleLogout = () => {
    localStorage.setItem('user', '');
    localStorage.getItem('user');
  };
  return (
    <>
      <GlobalStyle />
      <AppRoutes handleLogout={handleLogout} handleLogin={handleLogin} />
    </>
  );
}

export default App;
