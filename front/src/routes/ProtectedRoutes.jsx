import { CompleteCreateEvent } from '../pages/CompleteCreateEvent';
import { CreateEvent } from '../pages/CreateEvent';
import { Event } from '../pages/Event';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="new" element={<CreateEvent />} />
      <Route path="new/complete" element={<CompleteCreateEvent />} />
      <Route path="event/:id" element={<Event />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
