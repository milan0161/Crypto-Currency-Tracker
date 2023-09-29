import { NavLink } from 'react-router-dom';
import useLogin from '../../app/hooks/useLogin';
import { persistLogin } from '../../app/util/login';
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useLogin();

  const loginHandler = () => {
    persistLogin();
    setIsLoggedIn(true);
  };

  return (
    <nav className="h-full flex items-center">
      <ul className="grid grid-cols-12 w-full">
        <li className="col-start-1 nav_li justify-center">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'text-cyan-400' : 'text-slate-400'
            }
            end
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="nav_li justify-start">
            <NavLink
              to={'favorites'}
              className={({ isActive }) =>
                isActive ? 'text-cyan-400' : 'text-slate-400'
              }
            >
              Favorites
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li className="col-start-12">
            <button onClick={loginHandler} className="login_button">
              Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
