import { isAuthenticatedState } from '../hooks/sessionStore';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const lineLoginRoute = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      navigate('/home');
    }
  }, [session]);

  return (
    <Routes>
      <Route path="/" element={<LineLogin />} />
    </Routes>
  );
};
