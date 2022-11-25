import {
  HandleProviderCallback,
  RedirectToProvider
} from '../hooks/useLineLogin';
import { LineLogin } from '../pages/LineLogin';
import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const LineLoginRoutes = () => {
  const [state, setState] = useState('/');
  return (
    <Routes>
      <Route path="/login" element={<RedirectToProvider />} />
      <Route
        path="/line/callback"
        element={<HandleProviderCallback path={state} />}
      />
      <Route path="*" element={<LineLogin setState={setState} />} />
    </Routes>
  );
};
