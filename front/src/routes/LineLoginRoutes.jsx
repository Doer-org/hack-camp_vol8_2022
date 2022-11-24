import { isAuthenticatedState } from '../hooks/sessionStore';
import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const LineLoginRoutes = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      navigate('/home');
    }
  }, [session]);

  return (
    <Routes>
      <Route path="/" element={<RedirectToProvider />} />
      <Route path="/line/callback" element={<HandleProviderCallback />} />
    </Routes>
  );
};
