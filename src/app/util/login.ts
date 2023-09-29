export const persistLogin = () => {
  localStorage.setItem('loggedIn', 'true');
};

export const checkIsLoggedIn = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  return isLoggedIn;
};
