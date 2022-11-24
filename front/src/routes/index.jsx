import { LineLoginRoutes } from './LineLoginRoutes';
import { ProtectedRoutes } from './ProtectedRoutes';
import { isAuthenticatedState } from '../hooks/sessionStore';
import React from 'react';
import { useRecoilState } from 'recoil';

export const AppRoutes = () => {
  const [session] = useRecoilState(isAuthenticatedState);

  return <>{!session ? <ProtectedRoutes /> : <LineLoginRoutes />}</>;
};
