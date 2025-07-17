import React, { useState } from 'react';
import "../App.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col items-center justify-center transition-all duration-500 bg-white text-black dark:bg-black dark:text-white">
        <button
          className="px-4 py-2 mb-4 rounded bg-gray-200 dark:bg-gray-700"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle Dark Mode
        </button>
        <p>This is Tailwind v4.1.2 Dark Mode in action!</p>
      </div>
    </div>
  );
};

export default DarkMode;
