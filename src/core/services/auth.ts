export const isAuthenticated = (): boolean | null => {
  const refreshToken = localStorage.getItem('facebookToken');
  return !!refreshToken;
};

export const getToken = (): string | null =>
  localStorage.getItem('facebookToken');

export const login = (token: string): void => {
  localStorage.setItem('facebookToken', token);
};

export const logout = (): void => {
  localStorage.removeItem('facebookToken');
  localStorage.removeItem('user');
};
