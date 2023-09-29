import { Navigate, Outlet } from 'react-router-dom';
import { checkIsLoggedIn } from '../util/login';

const LoginGuard = () => {
  const isLoggedIn = checkIsLoggedIn();

  if (isLoggedIn == false) return <Navigate to={'/'} replace />;

  return <Outlet />;
};

export default LoginGuard;
