export const generateRandomString = () => {
  var S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var N = 16;
  return Array.from(Array(N))
    .map(() => S[Math.floor(Math.random() * S.length)])
    .join('');
};
