import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher      from '../components/ThemeSwitcher';
import DifficultySelector from '../components/DifficultySelector';
import ResetButton        from '../components/ResetButton';
import Board              from '../components/Board';
import resetIcon          from '../assets/reset.png';
import { themes } from '../themes';

function formatTime(ms) {
  const totalCs = Math.floor(ms / 10);
  const cs = totalCs % 100;
  const totalSec = Math.floor(totalCs / 100);
  const s = totalSec % 60;
  const m = Math.floor(totalSec / 60);
  return `${m.toString().padStart(2,'0')}:` +
         `${s.toString().padStart(2,'0')}:` +
         `${cs.toString().padStart(2,'0')}`;
}

export default function Game() {
  const { themeName } = useTheme();
  const theme = themes[themeName] || themes.grass;
  const [difficulty, setDifficulty] = useState('easy');
  const [resetKey, setResetKey]     = useState(0);
  const [elapsed, setElapsed]       = useState(0);
  const [status, setStatus]         = useState('playing');
  const startRef = useRef(null);
  const timerRef = useRef(null);
  const [rains, setRains] = useState([]);

  const themeEmojis = React.useMemo(() => {
    return [theme.bombIcon, theme.flagIcon];
  }, [theme]);

  function getRandomEmoji() {
    return themeEmojis[Math.floor(Math.random() * themeEmojis.length)];
  }
  function getRandomX() {
    return Math.random() * 90 + 5;
  }
  function getRandomDuration() {
    return Math.random() * 3 + 4;
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRains(rains => [
        ...rains,
        {
          id: Math.random().toString(36).slice(2),
          emoji: getRandomEmoji(),
          left: getRandomX(),
          duration: getRandomDuration(),
        },
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, [themeEmojis]);

  const handleRainClick = id => {
    setRains(rains => rains.filter(r => r.id !== id));
  };

  const onFirstClick = () => {
    if (timerRef.current) return;
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - startRef.current);
    }, 50);
  };

  const onGameEnd = result => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setStatus(result);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    startRef.current = null;
    setElapsed(0);
    setStatus('playing');
    setResetKey(k => k + 1);
  };

  const changeDifficulty = diff => {
    handleReset();
    setDifficulty(diff);
  };

  return (
    <div className={`game-layout ${themeName}`}
      style={{ position: 'relative' }}>
      <div className="emoji-rain-container game-rain-bg">
        {rains.map(rain => (
          <span
            key={rain.id}
            className="emoji-rain game-emoji-rain"
            style={{
              left: `${rain.left}%`,
              animationDuration: `${rain.duration}s`,
              opacity: 0.5
            }}
            onClick={() => handleRainClick(rain.id)}
          >
            {rain.emoji}
          </span>
        ))}
      </div>

      <header className="game-header">
        <ThemeSwitcher />
        <Link to="/" className="game-title-link">
          <h1>Bombs Away</h1>
        </Link>
        <DifficultySelector
          difficulty={difficulty}
          setDifficulty={changeDifficulty}
        />
        <Link to="/tutorial" className="tutorial-link">
          How to play
        </Link>
      </header>

      <div className="controls-above-board">
        <ResetButton onReset={handleReset} iconSrc={resetIcon} />
        <span className="timer">{formatTime(elapsed)}</span>
      </div>

      <div className="board-section">
        <Board
          key={`${difficulty}-${resetKey}`}
          difficulty={difficulty}
          onFirstClick={onFirstClick}
          onGameEnd={onGameEnd}
          disabled={status !== 'playing'}
        />
        {status === 'won' && (
          <div className="overlay">
            Yay! You won in <span style={{ color: 'red', fontWeight: 'bold' }}>{formatTime(elapsed)}</span>!
          </div>
        )}
        {status === 'lost' && (
          <div className="overlay">Game Over :( </div>
        )}
      </div>
    </div>
  );
}