import { useEffect, useState } from 'react';
import { checkIsLoggedIn } from '../util/login';

const useLogin = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const isLogged = checkIsLoggedIn();
    if (isLogged === true) {
      setIsLoggedIn(true);
      return;
    }
    return;
  }, [isLoggedIn]);

  return [isLoggedIn, setIsLoggedIn];
};

export default useLogin;
