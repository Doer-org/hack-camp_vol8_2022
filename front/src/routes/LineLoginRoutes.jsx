import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<LineLogin />} />
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback location={location.pathName} />}
      />
      <Route path="*" element={<LineLogin />} />
    </Routes>
  );
};
