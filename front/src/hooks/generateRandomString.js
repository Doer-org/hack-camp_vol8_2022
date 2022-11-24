import { useCallback } from 'react';

export const generateRandomString = useCallback(() => {
  var S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var N = 16;
  return Array.from(Array(N))
    .map(() => S[Math.floor(Math.random() * S.length)])
    .join('');
}, []);
