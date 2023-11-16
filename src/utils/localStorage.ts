export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const getAccessTokenFromLocalStorage = (): string => {
  return localStorage.getItem("accessToken") || "";
};

export const saveRefreshTokenToLocalStorage = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const getRefreshTokenFromLocalStorage = (): string => {
  return localStorage.getItem("refreshToken") || "";
};
