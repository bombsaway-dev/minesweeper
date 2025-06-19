import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import {
  createEmptyGrid,
  plantBombs,
  calculateNeighborBombs,
  revealTile
} from '../utils/gameLogic';
import { difficulties } from './DifficultySelector';

export default function Board({ difficulty }) {
  const { rows, cols, bombs } = difficulties[difficulty];
  const [grid, setGrid] = useState([]);
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState('playing');

  useEffect(() => {
    setGrid(createEmptyGrid(rows, cols));
    setStarted(false);
    setStatus('playing');
  }, [rows, cols, bombs, difficulty]);

  const checkWin = g =>
    g.flat().every(t =>
      (t.isBomb && !t.isRevealed) ||
      (!t.isBomb && t.isRevealed)
    );

  const handleClick = (r, c) => {
    if (status !== 'playing') return;

    const newGrid = grid.map(row => row.map(t => ({ ...t })));

    if (!started) {
      const exclude = [];
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols)
            exclude.push({ r: nr, c: nc });
        }
      }
      plantBombs(newGrid, bombs, exclude);
      calculateNeighborBombs(newGrid);
      setStarted(true);
    }

    const tile = newGrid[r][c];
    if (tile.isFlagged) return;
    if (tile.isBomb) {
      newGrid.forEach(row =>
        row.forEach(t => { if (t.isBomb) t.isRevealed = true; })
      );
      setStatus('lost');
    } else {
      revealTile(newGrid, r, c);
      if (checkWin(newGrid)) {
        setStatus('won');
        newGrid.forEach(row =>
          row.forEach(t => { if (t.isBomb) t.isFlagged = true; })
        );
      }
    }

    setGrid(newGrid);
  };

  const handleRightClick = (r, c) => {
    if (status !== 'playing') return;
    const newGrid = grid.map(row => row.map(t => ({ ...t })));
    const tile = newGrid[r][c];
    if (!tile.isRevealed) tile.isFlagged = !tile.isFlagged;
    if (checkWin(newGrid)) setStatus('won');
    setGrid(newGrid);
  };

  return (
    <div className="board-wrapper">
      {status === 'won' && (
        <div className="overlay">You Win!</div>
      )}
      {status === 'lost' && (
        <div className="overlay">Game over LOL</div>
      )}
      <div className="board">
        {grid.map((row, i) => (
          <div key={i} className="board-row">
            {row.map(tile => (
              <Tile
                key={`${tile.row}-${tile.col}`}
                tile={tile}
                onClick={handleClick}
                onRightClick={handleRightClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}