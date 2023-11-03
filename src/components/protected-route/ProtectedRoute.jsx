import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ redirectPath = '/auth' }) {
  // console.log(isAllowed);
  const userData = JSON.parse(localStorage.getItem('userDataInfo'));
  if (!userData || userData === null) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
