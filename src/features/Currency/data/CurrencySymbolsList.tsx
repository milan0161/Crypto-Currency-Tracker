import CurrencySymbolItem from './CurrencySymbolItem';

type CurrencySymbolsListProps = {
  symbols: string[] | undefined;
};

const CurrencySymbolsList = ({ symbols: data }: CurrencySymbolsListProps) => {
  return (
    <tbody className="divide-y-[2px] divide-slate-100">
      {data?.map((s) => {
        return <CurrencySymbolItem symbol={s} key={s}></CurrencySymbolItem>;
      })}
    </tbody>
  );
};

export default CurrencySymbolsList;
