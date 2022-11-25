import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const pathName = useLocation().pathname;
  const [stateProp, setStateProp] = useState('');
  const setState = () => setStateProp(pathName);
  return (
    <Routes>
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback pathname={stateProp} />}
      />
      <Route path="*" element={<LineLogin setPathname={setState} />} />
    </Routes>
  );
};
