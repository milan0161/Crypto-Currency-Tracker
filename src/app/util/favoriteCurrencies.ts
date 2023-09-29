export const setFavoriteCurrenciesLocal = (symbol: string) => {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push(symbol);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavoriteCurrencies = (): string[] => {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites;
};

export const removeFromFavorites = (symbol: string) => {
  let favorites: string[] = JSON.parse(
    localStorage.getItem('favorites') || '[]',
  );
  favorites = favorites.filter((s) => s !== symbol);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
