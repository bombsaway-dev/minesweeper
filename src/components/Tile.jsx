import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Tile({ tile, onClick, onRightClick }) {
  const { theme } = useTheme();

  const classes = [
    'tile',
    tile.isRevealed && 'revealed',
    tile.isFlagged  && 'flagged'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      onClick={() => onClick(tile.row, tile.col)}
      onContextMenu={e => {
        e.preventDefault();
        onRightClick(tile.row, tile.col);
      }}
    >
      {tile.isRevealed && tile.isBomb && theme.bombIcon}
      {tile.isRevealed && !tile.isBomb && tile.adjacentBombs > 0
        ? tile.adjacentBombs
        : null}
      {!tile.isRevealed && tile.isFlagged && theme.flagIcon}
    </div>
  );
}