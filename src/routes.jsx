import { Route, Routes } from 'react-router-dom';
import AllTracks from './pages/AllTracks/AllTracks';
import Favorites from './pages/Favorites/Favorites';
import Category from './pages/Category/Category';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Register/SignUp';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

function AppRoutes({ handleLogin, handleLogout }) {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn handleLogin={handleLogin} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage handleLogout={handleLogout} />}>
          <Route path="/" element={<AllTracks />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
