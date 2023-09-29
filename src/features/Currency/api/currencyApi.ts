import { apiSlice } from '../../../app/api/apiSlice';
import { Ticker } from '../types';

const currencyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSymbols: builder.query<string[], void>({
      query: () => ({
        url: '/api/v1/symbols',
      }),
      transformResponse(response: string[]) {
        return response.slice(0, 5);
      },
    }),
    getCurrencyDetails: builder.query<Ticker, string>({
      query: (symbol) => ({
        url: `/api/v1/pubticker/${symbol}`,
      }),
    }),
  }),
});

export const { useGetSymbolsQuery, useGetCurrencyDetailsQuery } = currencyApi;
