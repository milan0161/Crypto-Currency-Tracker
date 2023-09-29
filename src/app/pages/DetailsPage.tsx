import { useParams } from 'react-router-dom';
import { useGetCurrencyDetailsQuery } from '../../features/Currency/api/currencyApi';
import CurrencyTableHead from '../../features/Currency/data/CurrencyTableHead';
import CurrencyData from '../../features/Currency/data/CurrencyData';
import {
  removeFromFavorites,
  setFavoriteCurrenciesLocal,
} from '../util/favoriteCurrencies';
import { useAppDispatch, useAppSelector } from '../store/store';
import {
  addToFavoriteCurrencies,
  removeFromFavoriteCurrencies,
} from '../../features/Currency/state/currencySlice';
import useLogin from '../hooks/useLogin';
import { DETAILS_PAGE_TABLE_HEADERS } from '../util/Constants';

const DetailsPage = () => {
  const { symbol } = useParams();
  const { data, isLoading } = useGetCurrencyDetailsQuery(symbol!);

  const [isLoggedIn] = useLogin();

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state) => state.currency.favoriteCurrencies,
  );

  let isFavorite: boolean = favorites.includes(symbol!);

  if (isLoading) {
    return <p className="loading_indicator">Loading...</p>;
  }

  const addToFavoritesHandler = () => {
    setFavoriteCurrenciesLocal(symbol!);
    dispatch(addToFavoriteCurrencies(symbol!));
  };

  const removeFromFavoritesHandler = () => {
    removeFromFavorites(symbol!);
    dispatch(removeFromFavoriteCurrencies(symbol!));
  };

  return (
    <section className="px-10 py-5">
      <table className="w-full table_shadow">
        <CurrencyTableHead headers={DETAILS_PAGE_TABLE_HEADERS} />
        <tbody>
          <tr className="flex p-2">
            <td className="text-cyan-400 font-bold text-lg cursor-pointer w-full">
              {symbol!.toUpperCase()}
            </td>
            <CurrencyData
              currencyData={[data!.last_price, data!.high, data!.low]}
            />
          </tr>
        </tbody>
      </table>
      {!isFavorite && isLoggedIn && (
        <button
          onClick={addToFavoritesHandler}
          className="px-4 py-2 bg-cyan-400 font-semibold text-white mt-10 hover:outline hover:outline-cyan-400 hover:text-cyan-400 hover:bg-white duration-150"
        >
          Add to favorites
        </button>
      )}
      {isFavorite && isLoggedIn && (
        <button
          onClick={removeFromFavoritesHandler}
          className="px-4 py-2 bg-red-600 font-semibold text-white mt-10 hover:outline hover:outline-red-600 hover:text-red-600 hover:bg-white duration-150"
        >
          Remove from favorites
        </button>
      )}
    </section>
  );
};

export default DetailsPage;
