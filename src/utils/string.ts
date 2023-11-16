export const generateRandomString = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};

export const validateUrl = (url: string) => {
  const urlRegex = new RegExp(
    "^(https?://)?([a-zA-Z0-9_-]+.)+[a-zA-Z]{2,6}(:[0-9]{1,5})?(/[^/]*)*$",
  );
  return urlRegex.test(url);
};
