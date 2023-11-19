export const saveRefreshTokenToLocalStorage = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const getRefreshTokenFromLocalStorage = (): string => {
  return localStorage.getItem("refreshToken") || "";
};

export const removeRefreshTokenFromLocalStorage = () => {
  localStorage.removeItem("refreshToken");
};
