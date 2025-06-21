import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../style.css';

export default function Tile({ cell, onClick, onContextMenu }) {
  const { themeName } = useTheme();

  const SYMBOLS = {
    grass: { bomb: '💣', flag: '🚩' },
    ocean: { bomb: '🐚', flag: '⚓' },
    fire:  { bomb: '🔥', flag: '☢️' }
  };
  const { bomb, flag } = SYMBOLS[themeName] || SYMBOLS.grass;

  const { isRevealed, isFlagged, isBomb, adjacentBombs } = cell;

  return (
    <div
      className={`tile ${isRevealed?'revealed':''} ${isFlagged?'flagged':''}`}
      onClick={onClick}
      onContextMenu={e => {
        e.preventDefault();
        onContextMenu();
      }}
    >
      {isFlagged && <span className="flag-emoji">{flag}</span>}

      {isRevealed && isBomb && <span className="bomb-emoji">{bomb}</span>}

      {isRevealed && !isBomb && adjacentBombs > 0 && (
        <span className={`count count-${adjacentBombs}`}>
          {adjacentBombs}
        </span>
      )}
    </div>
  );
}