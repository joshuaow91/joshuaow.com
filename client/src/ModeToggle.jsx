import React, { useState, useEffect } from 'react';
import Mode from './assets/mode.png';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
        className={`h-10 w-10 transform transition-transform duration-500 ${
          isDarkMode ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
};

export default Toggle;
