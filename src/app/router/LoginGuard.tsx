import { Outlet, useNavigate } from 'react-router-dom';
import { checkIsLoggedIn } from '../util/login';
import { useEffect } from 'react';

const LoginGuard = () => {
  const navigate = useNavigate();
  const isLoggedIn = checkIsLoggedIn();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);

  return <Outlet />;
};

export default LoginGuard;
