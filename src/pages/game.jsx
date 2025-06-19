import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import ThemeSwitcher      from '../components/ThemeSwitcher';
import DifficultySelector from '../components/DifficultySelector';
import ResetButton        from '../components/ResetButton';
import Board              from '../components/Board';

function GameContent() {
  const { themeName } = useTheme();
  const [difficulty, setDifficulty] = useState('easy');
  const [resetFlag, setResetFlag] = useState(0);
  const doReset = () => setResetFlag(f => f + 1);

  return (
    <div className={`game-container ${themeName}`}>
      <Link to="/tutorial" className="tutorial-link">
        How to play
      </Link>

      <h1>Bombs Away</h1>

      <div className="controls">
        <DifficultySelector
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <ThemeSwitcher />
        <ResetButton onReset={doReset} />
      </div>

      <Board
        key={`${difficulty}-${resetFlag}`}
        difficulty={difficulty}
      />
    </div>
  );
}

export default function Game() {
  return (
    <ThemeProvider>
      <GameContent />
    </ThemeProvider>
  );
}