import { useGetSymbolsQuery } from '../../features/Currency/api/currencyApi';
import CurrencySymbolsList from '../../features/Currency/data/CurrencySymbolsList';
import CurrencyTableHead from '../../features/Currency/data/CurrencyTableHead';
import { HOME_PAGE_TABLE_HEADERS } from '../util/Constants';

export const HomePage = () => {
  const { data, isLoading } = useGetSymbolsQuery();

  if (isLoading) {
    return <p className="loading_indicator">Loading....</p>;
  }

  return (
    <main className="px-10 py-5">
      <table className="w-full table_shadow">
        <CurrencyTableHead headers={HOME_PAGE_TABLE_HEADERS} />
        <CurrencySymbolsList symbols={data} />
      </table>
    </main>
  );
};
