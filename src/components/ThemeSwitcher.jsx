import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme();
  return (
    <select
      className="theme-selector"
      value={themeName}
      onChange={e => setTheme(e.target.value)}
    >
      <option value="grass">Grass</option>
      <option value="ocean">Ocean</option>
      <option value="fire">Fire</option>
    </select>
  );
}