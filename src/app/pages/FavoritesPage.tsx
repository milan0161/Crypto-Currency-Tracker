import CurrencySymbolsList from '../../features/Currency/data/CurrencySymbolsList';
import CurrencyTableHead from '../../features/Currency/data/CurrencyTableHead';
import { useAppSelector } from '../store/store';
import { FAVORITES_PAGE_TABLE_HEADERS } from '../util/Constants';

const FavoritesPage = () => {
  const favorites = useAppSelector(
    (state) => state.currency.favoriteCurrencies,
  );

  return (
    <main className="px-10 py-5">
      <table className="w-full table_shadow">
        <CurrencyTableHead headers={FAVORITES_PAGE_TABLE_HEADERS} />
        <CurrencySymbolsList symbols={favorites} />
      </table>
    </main>
  );
};

export default FavoritesPage;
