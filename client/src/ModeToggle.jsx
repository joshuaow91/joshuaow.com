import React, { useState, useEffect } from 'react';
import Mode from '../public/images/mode.png';

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
    <button
      className="focus:outline-none"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      <img
        src={Mode}
        className={`h-8 w-8 transform transition-transform duration-500  ${
          isDarkMode ? 'rotate-180 invert' : ''
        }`}
        alt='Dark mode / Light mode toggle icon'
      />
    </button>
  );
};

export default Toggle;
