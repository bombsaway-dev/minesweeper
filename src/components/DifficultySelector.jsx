import React from 'react';

export const difficulties = {
  easy:   { rows: 9,  cols: 9,  bombs: 10 },
  medium: { rows: 16, cols: 16, bombs: 40 },
  hard:   { rows: 16, cols: 30, bombs: 99 },
};

export default function DifficultySelector({ difficulty, setDifficulty }) {
  const options = ['easy', 'medium', 'hard'];
  return (
    <div className="difficulty-buttons">
      {options.map(opt => (
        <button
          key={opt}
          className={`diff-btn ${opt} ${difficulty === opt ? 'active' : ''}`}
          onClick={() => setDifficulty(opt)}
        >
          {opt.toUpperCase()}
        </button>
      ))}
    </div>
  );
}