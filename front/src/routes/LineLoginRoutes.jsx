import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const [state, setState] = useState('/');
  const pathname = useLocation().pathname;
  if (pathname !== '/login' || pathname !== '/login/callback') {
    setState(pathname);
  }
  return (
    <Routes>
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback path={state} />}
      />
      <Route path="*" element={<LineLogin />} />
    </Routes>
  );
};
