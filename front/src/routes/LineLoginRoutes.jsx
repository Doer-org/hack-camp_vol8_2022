import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const [pathState, setPathState] = useState('');
  const setState = (path) => setPathState(path);
  return (
    <Routes>
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback path={pathState} />}
      />
      <Route path="*" element={<LineLogin setPathname={setState} />} />
    </Routes>
  );
};
