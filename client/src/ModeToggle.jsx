import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle-wrapper">
      <label
        htmlFor="darkModeToggle"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="darkModeToggle"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            aria-label="Toggle dark mode"
          />
          <div className="block w-12 h-6 bg-teal-600 rounded-full"></div>
          <div
            className={`absolute left-1 top-1 w-6 h-4 bg-zinc-200 rounded-full transition-transform duration-500 transform-gpu ${
              isDarkMode ? 'translate-x-4' : ''
            } flex items-center justify-center`}
          >
            <FontAwesomeIcon
              icon={!isDarkMode ? faMoon : faSun}
              className="text-sm text-zinc-800"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
