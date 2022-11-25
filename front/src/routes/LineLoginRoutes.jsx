import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const [stateProp, setStateProp] = useState('');
  const setState = (path) => setStateProp(path);
  return (
    <Routes>
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback pathname={stateProp} />}
      />
      <Route path="*" element={<LineLogin />} setPathname={setState} />
    </Routes>
  );
};
