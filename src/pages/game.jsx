import React, { useState } from 'react';
import '../style.css';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeSwitcher      from '../components/ThemeSwitcher';
import DifficultySelector from '../components/DifficultySelector';
import ResetButton        from '../components/ResetButton';
import Board              from '../components/Board';

export default function Game() {
  const [difficulty, setDifficulty] = useState('easy');
  const [resetFlag, setResetFlag] = useState(0);
  const doReset = () => setResetFlag(f => f + 1);

  return (
    <ThemeProvider>
      <div className="game-container">
        <h1>Bombs Away</h1>
        <div className="controls">
          <DifficultySelector
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
          <ThemeSwitcher />
          <ResetButton onReset={doReset} />
        </div>
        {/* key forces Board to remount on reset or difficulty change */}
        <Board key={`${difficulty}-${resetFlag}`} difficulty={difficulty} />
      </div>
    </ThemeProvider>
  );
}