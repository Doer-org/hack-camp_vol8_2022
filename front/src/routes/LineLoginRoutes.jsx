import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Routes>
      <Route path="/" element={<LineLogin />} />
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback pathname={location.pathname} />}
      />
      <Route path="*" element={<LineLogin />} />
    </Routes>
  );
};
