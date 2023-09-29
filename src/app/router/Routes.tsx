import DetailsPage from '../pages/DetailsPage';
import FavoritesPage from '../pages/FavoritesPage';
import { HomePage } from '../pages/HomePage';
import RootLayout from '../pages/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import LoginGuard from './LoginGuard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'details/:symbol',
        element: <DetailsPage />,
      },
      {
        element: <LoginGuard />,
        children: [
          {
            path: 'favorites',
            element: <FavoritesPage />,
          },
        ],
      },
    ],
  },
]);
