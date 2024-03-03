import { Route, Routes } from 'react-router-dom';
import AllTracks from './pages/AllTracks/AllTracks';
import Favorites from './pages/Favorites/Favorites';
import Category from './pages/Category/Category';
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />}>
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
