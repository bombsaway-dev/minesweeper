import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import {
  createEmptyGrid,
  plantBombs,
  calculateNeighborBombs,
  revealTile
} from '../utils/gameLogic';
import { difficulties } from './DifficultySelector';

export default function Board({ difficulty, onFirstClick, onGameEnd, disabled }) {
  const { rows, cols, bombs } = difficulties[difficulty];
  const [grid, setGrid]       = useState([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setGrid(createEmptyGrid(rows, cols));
    setStarted(false);
  }, [rows, cols, bombs, difficulty]);

  const checkWin = g =>
    g.flat().every(t =>
      (t.isBomb    && !t.isRevealed) ||
      (!t.isBomb   &&  t.isRevealed)
    );

  const handleClick = (r,c) => {
    if (disabled) return;
    const newGrid = grid.map(row => row.map(t => ({ ...t })));

    if (!started) {
      const exclude = [];
      for (let dr=-1; dr<=1; dr++)
        for (let dc=-1; dc<=1; dc++){
          const nr=r+dr, nc=c+dc;
          if (nr>=0&&nr<rows&&nc>=0&&nc<cols)
            exclude.push({r:nr,c:nc});
        }
      plantBombs(newGrid, bombs, exclude);
      calculateNeighborBombs(newGrid);
      setStarted(true);
      onFirstClick();
    }

    const tile = newGrid[r][c];
    if (tile.isFlagged || tile.isRevealed) return;

    if (tile.isBomb) {
      newGrid.forEach(row => row.forEach(t => {
        if (t.isBomb && !t.isFlagged) t.isRevealed = true;
      }));
      setGrid(newGrid);
      onGameEnd('lost');
    } else {
      revealTile(newGrid, r, c);
      setGrid(newGrid);
      if (checkWin(newGrid)) onGameEnd('won');
    }
  };

  const handleRightClick = (r,c) => {
    if (disabled) return;
    const newGrid = grid.map(row => row.map(t => ({ ...t })));
    const tile = newGrid[r][c];
    if (!tile.isRevealed) {
      tile.isFlagged = !tile.isFlagged;
      setGrid(newGrid);
      if (checkWin(newGrid)) onGameEnd('won');
    }
  };

  return (
    <div className="board-wrapper">
      <div className="board">
        {grid.map((row, r) => (
          <div key={r} className="board-row">
            {row.map((tile, c) => (
              <Tile
                key={`${r}-${c}`}
                cell={tile}
                onClick={() => handleClick(r,c)}
                onContextMenu={() => handleRightClick(r,c)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}