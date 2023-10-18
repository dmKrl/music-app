import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ redirectPath = '/signin' }) {
  // console.log(isAllowed);
  if (!localStorage.getItem('user')) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
