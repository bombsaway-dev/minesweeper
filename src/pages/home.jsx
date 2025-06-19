import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bombs Away</h1>
      <Link to="/tutorial">How to play</Link>
      <Link to="/game">Play Game</Link>
    </div>
  );
}