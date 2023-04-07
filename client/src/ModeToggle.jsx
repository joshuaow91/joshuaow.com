import React, { useState, useEffect } from 'react';

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
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-none peer-focus:ring-none dark:peer-focus:ring-none rounded-full peer dark:bg-pink-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink500"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDarkMode ? 'Light' : 'Dark'}
      </span>
    </label>
  );
};

export default Toggle;
