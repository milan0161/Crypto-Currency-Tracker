type CurrencyTableHeadProps = {
  headers: string[];
};

const CurrencyTableHead = ({ headers }: CurrencyTableHeadProps) => {
  return (
    <thead>
      <tr className="flex p-2">
        {headers.map((header, i) => {
          return (
            <th
              className={`w-[100%] ${i == 0 ? 'text-start' : 'text-end'}`}
              key={header}
            >
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default CurrencyTableHead;
