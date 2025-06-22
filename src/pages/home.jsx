import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';
import ThemeSwitcher from '../components/ThemeSwitcher';
import '../style.css';

export default function Home() {
  const { themeName } = useTheme();
  const [rains, setRains] = useState([]);
  const theme = themes[themeName] || themes.grass;

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
    }, 1500);
    return () => clearInterval(interval);
  }, [themeEmojis]);

  const handleRainClick = id => {
    setRains(rains => rains.filter(r => r.id !== id));
  };

  return (
    <div
      className={`home-container grass-home-bg`}
      style={{
        background:
          themeName === 'grass'
            ? 'linear-gradient(135deg, #dfefc7 0%, #f5e1a4 100%)'
            : themeName === 'ocean'
            ? 'linear-gradient(135deg, #d4f1f9 0%, #99d0d3 100%)'
            : 'linear-gradient(135deg, #fde0c3 0%, #f3aa7c 100%)',
        color: theme.textColor,
      }}
    >
      <ThemeSwitcher />
      <div className="logo-huge" tabIndex={0}>
        Bombs Away!
      </div>
      <div className="home-links d-flex flex-row justify-content-center align-items-center gap-4 mt-4">
        <Link
          className="btn btn-primary px-4 py-2 fw-bold fs-5 text-center"
          to="/tutorial"
        >
          How to play
        </Link>
        <Link
          className="btn btn-primary px-4 py-2 fw-bold fs-5 text-center"
          to="/game"
        >
          Play Game
        </Link>
      </div>
      <div className="emoji-rain-container">
        {rains.map(rain => (
          <span
            key={rain.id}
            className="emoji-rain"
            style={{
              left: `${rain.left}%`,
              animationDuration: `${rain.duration}s`,
            }}
            onClick={() => handleRainClick(rain.id)}
          >
            {rain.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}