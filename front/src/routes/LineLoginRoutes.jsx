import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const [pathname, setPathname] = useState('');
  const handleSetPathname = (path) => {
    setPathname(path);
  };
  return (
    <Routes>
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback pathname={pathname} />}
      />
      <Route path="*" element={<LineLogin />} setPathname={handleSetPathname} />
    </Routes>
  );
};
