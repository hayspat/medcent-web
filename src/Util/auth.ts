const AUTH_TOKEN = "auth-token";

export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const setToken = (token: string) =>
  localStorage.setItem(AUTH_TOKEN, token);
export const deleteToken = () => localStorage.removeItem(AUTH_TOKEN);

export const checkAuthState = (): void => {
  const token = localStorage.getItem("token");
  const expirationDate = new Date(Number.parseInt(getToken() || "", 10) * 1000);

  if (
    !token ||
    !(expirationDate instanceof Date) ||
    expirationDate <= new Date()
  ) {
    deleteToken();
  } else if (token) {
    setToken(token);
    setTimeout(() => {
      deleteToken();
    }, (expirationDate as any) - (new Date() as any));
  }
};
