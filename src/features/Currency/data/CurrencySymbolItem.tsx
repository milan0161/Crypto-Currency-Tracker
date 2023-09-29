import { useNavigate } from 'react-router-dom';
import CurrencyData from './CurrencyData';
import useWebSocket from '../../../app/hooks/useWebSocket';

type CurrencySymbolItemProps = {
  symbol: string;
};

const CurrencySymbolItem = ({ symbol }: CurrencySymbolItemProps) => {
  const navigate = useNavigate();

  const currencyState = useWebSocket(symbol);

  const detailsHandler = () => {
    navigate('/details/' + symbol);
  };

  return (
    <tr className="flex p-2">
      <td
        onClick={detailsHandler}
        className="text-cyan-400 font-bold text-lg cursor-pointer w-full"
      >
        {symbol.toUpperCase()}
      </td>
      <CurrencyData currencyData={currencyState} />
    </tr>
  );
};

export default CurrencySymbolItem;
