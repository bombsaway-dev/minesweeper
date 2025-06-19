import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home     from './pages/home';
import Tutorial from './pages/tutorial';
import Game     from './pages/game';

export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/game"     element={<Game />} />
    </Routes>
  );
}