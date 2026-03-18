import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Khởi tạo theme
  useEffect(() => {
    // Ưu tiên localStorage, nếu không có thì check OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Mặc định cho phép Dark/Light tùy localStorage hoặc hệ thống. Tuy nhiên app này mặc định light mode đẹp hơn.
    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(initialTheme);
    if (initialTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg border transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center
        ${isDarkMode 
          ? 'bg-slate-800/80 border-slate-700 shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md' 
          : 'bg-white/80 border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.1)] backdrop-blur-md'
        }`}
      aria-label="Toggle Dark/Light Mode"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon (Light) */}
        <span 
          className={`material-symbols-outlined absolute transition-all duration-500 ease-in-out ${isDarkMode ? 'opacity-0 rotate-[90deg] scale-50' : 'opacity-100 rotate-0 scale-100 text-amber-500'}`}
        >
          light_mode
        </span>
        
        {/* Moon Icon (Dark) */}
        <span 
          className={`material-symbols-outlined absolute transition-all duration-500 ease-in-out ${isDarkMode ? 'opacity-100 rotate-0 scale-100 text-sky-400' : 'opacity-0 -rotate-[90deg] scale-50'}`}
        >
          dark_mode
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
