import { isAuthenticatedState } from '../hooks/sessionStore';
import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const LineLoginRoutes = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  useEffect(() => {
    if (session) {
      Navigate('/home');
    }
  }, [session]);

  return (
    <Routes>
      <Route path="/" element={<LineLogin />} />
      <Route path="/login" element={<RedirectToProvider />} />
      <Route path="/line/callback" element={<HandleProviderCallback />} />
    </Routes>
  );
};
