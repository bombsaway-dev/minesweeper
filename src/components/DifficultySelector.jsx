import React from 'react';

export const difficulties = {
  easy:   { rows: 9,  cols: 9,  bombs: 10 },
  medium: { rows: 16, cols: 16, bombs: 40 },
  hard:   { rows: 16, cols:30, bombs: 99 },
};

export default function DifficultySelector({ difficulty, setDifficulty }) {
  return (
    <select value={difficulty}
            onChange={e => setDifficulty(e.target.value)}>
      {Object.keys(difficulties).map(key => (
        <option key={key} value={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </option>
      ))}
    </select>
  );
}