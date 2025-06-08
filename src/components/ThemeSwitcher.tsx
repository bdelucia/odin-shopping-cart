import '../index.css';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('');

  const themes = [
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'garden',
    'forest',
    'pastel',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'night',
    'coffee',
    'dim',
    'sunset',
  ];

  useEffect(() => {
    themeChange(false);
    const savedTheme = localStorage.getItem('theme') || 'luxury';
    setCurrentTheme(savedTheme);
  }, []);

  return (
    <div className="join join-vertical">
      {themes.map((theme) => (
        <input
          key={theme}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
          value={theme}
          data-set-theme={theme}
          checked={currentTheme === theme}
          onChange={() => setCurrentTheme(theme)}
        />
      ))}
    </div>
  );
}

export default ThemeSwitcher;
