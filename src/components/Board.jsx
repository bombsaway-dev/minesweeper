import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import { initGame, revealTile } from '../utils/gameLogic';
import { difficulties } from './DifficultySelector';

export default function Board({ difficulty }) {
  const { rows, cols, bombs } = difficulties[difficulty];
  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setGrid(initGame(rows, cols, bombs));
    setGameOver(false);
  };

  useEffect(resetGame, [difficulty]);

  const handleClick = (r, c) => {
    if (gameOver) return;
    const newGrid = grid.map(row => row.map(t => ({ ...t })));
    const tile = newGrid[r][c];
    if (tile.isFlagged) return;
    if (tile.isBomb) {
      // reveal all bombs
      newGrid.forEach(row =>
        row.forEach(t => { if (t.isBomb) t.isRevealed = true; })
      );
      setGameOver(true);
    } else {
      revealTile(newGrid, r, c);
    }
    setGrid(newGrid);
  };

  const handleRightClick = (r, c) => {
    if (gameOver) return;
    const newGrid = grid.map(row => row.map(t => ({ ...t })));
    const tile = newGrid[r][c];
    if (!tile.isRevealed) tile.isFlagged = !tile.isFlagged;
    setGrid(newGrid);
  };

  return (
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
  );
}