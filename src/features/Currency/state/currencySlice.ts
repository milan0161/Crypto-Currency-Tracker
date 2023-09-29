import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrencyInitalState } from '../types';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    favoriteCurrencies: [],
  } as CurrencyInitalState,
  reducers: {
    addToFavoriteCurrencies: (state, action: PayloadAction<string>) => {
      state.favoriteCurrencies.push(action.payload);
    },
    setInitialFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteCurrencies = action.payload;
    },
    removeFromFavoriteCurrencies: (state, action: PayloadAction<string>) => {
      state.favoriteCurrencies = state.favoriteCurrencies.filter(
        (x) => x !== action.payload,
      );
    },
  },
});

export default currencySlice.reducer;

export const {
  addToFavoriteCurrencies,
  setInitialFavorites,
  removeFromFavoriteCurrencies,
} = currencySlice.actions;
