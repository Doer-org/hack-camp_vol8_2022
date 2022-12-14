import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const LineLoginRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<RedirectToProvider />} />
      <Route path="/line/callback" element={<HandleProviderCallback />} />
      <Route path="*" element={<LineLogin />} />
    </Routes>
  );
};
