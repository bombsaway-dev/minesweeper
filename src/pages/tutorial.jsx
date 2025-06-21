import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../style.css';
import tut1 from '../assets/tut-ss-1.png';
import tut2 from '../assets/tut-ss-2.jpg';
import tut3 from '../assets/ss-tut-3.png';
import tut4 from '../assets/tut-ss-4.jpg';

export default function Tutorial() {
  const { themeName } = useTheme();
  const navigate = useNavigate();
  const slides = [
    { img: tut1, text: 'Bombs are hidden on the map! Right-click to flag a square you think has a bomb.' },
    { img: tut2, text: 'Safe squares have a number—how many bombs touch that tile.' },
    { img: tut3, text: 'Left-click a safe square to reveal its number.' },
    { img: tut4, text: 'Clicking a bomb ends the game. Reveal all safe tiles to win!' },
  ];
  const [idx, setIdx] = useState(0);
  const [closing, setClosing] = useState(false);

  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => navigate(-1), 500);
  };

  return (
    <div className={themeName}>
      <div className={`tutorialOverlay ${themeName} ${closing ? 'fade-out' : ''}`}>
        <div className="tutorialCard">
          <button className="tutorialClose" onClick={handleClose}>×</button>
          <h3>How to play</h3>

          <div className="tutorialBody">
            <div
              className="slidesContainer"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="slide">
                  <img src={s.img} alt={`step ${i + 1}`} className="tutorialBoard" />
                  <p className="tutorialText">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tutorialFooter">
            <button className="tutArrow" onClick={prev}>‹</button>
            <div className="tutDots">
              {slides.map((_, i) => (
                <span key={i} className={i === idx ? 'active' : ''} />
              ))}
            </div>
            <button className="tutArrow" onClick={next}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
}