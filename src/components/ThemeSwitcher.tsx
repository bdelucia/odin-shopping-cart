import '../index.css';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('');

  const themes = [
    'bobbeh',
    'cupcake',
    'bumblebee',
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
        <button className="flex justify-center items-center gap-2 px-4">
          <div
            data-theme={theme}
            className="bg-base-100 size-7 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm items-center"
          >
            <div className="bg-base-content size-2 rounded-full"></div>
            <div className="bg-primary size-2 rounded-full"></div>
            <div className="bg-secondary size-2 rounded-full"></div>
            <div className="bg-accent size-2 rounded-full"></div>
          </div>
          <input
            key={theme}
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item min-w-full"
            aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
            value={theme}
            data-set-theme={theme}
            checked={currentTheme === theme}
            onChange={() => setCurrentTheme(theme)}
          />
        </button>
      ))}
    </div>
  );
}

export default ThemeSwitcher;
