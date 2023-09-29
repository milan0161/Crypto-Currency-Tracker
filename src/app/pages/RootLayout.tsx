import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { getFavoriteCurrencies } from '../util/favoriteCurrencies';
import { setInitialFavorites } from '../../features/Currency/state/currencySlice';

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favorites = getFavoriteCurrencies();
    dispatch(setInitialFavorites(favorites));
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
