import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Category from './pages/Category';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

function AppRoutes() {
  const [isAllowed, setIsAllowed] = useState(false);
  const handleLogin = () => setIsAllowed(!isAllowed);
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage isAllowed={isAllowed} handleLogin={handleLogin} />}
      >
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={isAllowed}>
              <Route index element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/category/:id" element={<Category />} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRoutes;
