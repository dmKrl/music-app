import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ redirectPath = '/signup', isAllowed }) {
  // console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
