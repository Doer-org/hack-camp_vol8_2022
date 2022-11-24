import { isAuthenticatedState } from '../hooks/sessionStore';
import { CompleteCreateEvent } from '../pages/CompleteCreateEvent';
import { CreateEvent } from '../pages/CreateEvent';
import { Event } from '../pages/Event';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const ProtectedRoutes = () => {
  const [session] = useRecoilState(isAuthenticatedState);
  useEffect(() => {
    if (session) {
      Navigate('/home');
    }
  }, [session]);

  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="new" element={<CreateEvent />} />
      <Route path="new/complete" element={<CompleteCreateEvent />} />
      <Route path="event/:id" element={<Event />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
