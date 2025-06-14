import '../index.css';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import './styles/ThemeSwitcher.css';

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
    <fieldset
      className="join join-vertical theme-container"
      role="radiogroup"
      aria-label="Theme selector"
    >
      {themes.map((theme) => (
        <label
          key={theme}
          className="theme-button flex justify-center items-center gap-1 sm:gap-2 px-2 sm:px-4 cursor-pointer"
        >
          <div
            data-theme={theme}
            className="theme-preview bg-base-100 size-5 sm:size-7 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-0.5 sm:p-1 shadow-sm items-center"
            aria-hidden="true"
          >
            <div className="bg-base-content size-1.5 sm:size-2 rounded-full"></div>
            <div className="bg-primary size-1.5 sm:size-2 rounded-full"></div>
            <div className="bg-secondary size-1.5 sm:size-2 rounded-full"></div>
            <div className="bg-accent size-1.5 sm:size-2 rounded-full"></div>
          </div>
          <input
            type="radio"
            name="theme-buttons"
            className="btn btn-outline landscape-input sm:btn-md theme-controller join-item min-w-full h-auto py-1 sm:py-2"
            aria-label={`${
              theme.charAt(0).toUpperCase() + theme.slice(1)
            } theme`}
            value={theme}
            checked={currentTheme === theme}
            onChange={() => setCurrentTheme(theme)}
          />
          <span className="sr-only">{theme} theme</span>
        </label>
      ))}
    </fieldset>
  );
}

export default ThemeSwitcher;
