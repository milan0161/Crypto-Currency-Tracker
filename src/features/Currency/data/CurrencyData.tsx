type CurrencyDataProps = {
  currencyData: number[] | undefined;
};

const CurrencyData = ({ currencyData }: CurrencyDataProps) => {
  return (
    <>
      {currencyData &&
        currencyData.map((data, i) => {
          if (currencyData.length === 5 && i === 2) {
            return (
              <td key={i} className="w-full text-end">
                {data > 0
                  ? `+${(data * 100).toPrecision(2)}%`
                  : `${(data * 100).toPrecision(2)}%`}
              </td>
            );
          }
          return (
            <td className="w-full text-end" key={i}>
              {data}
            </td>
          );
        })}
    </>
  );
};

export default CurrencyData;
