import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { themeName, setThemeName } = useTheme();
  return (
    <select value={themeName}
            onChange={e => setThemeName(e.target.value)}>
      <option value="grass">Grass</option>
      <option value="ocean">Ocean</option>
      <option value="fire">Fire</option>
    </select>
  );
}