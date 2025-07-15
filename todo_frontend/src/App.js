import React, { useState, useEffect } from 'react';
import './App.css';
import TodoPageFigmaDesign from "./components/TodoPageFigmaDesign";

/**
 * PUBLIC_INTERFACE
 * Application entrypoint for TODO app.
 * Renders only the interactive Figma-based TodoPageFigmaDesign UI for a focused experience.
 */
function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App" style={{
      minHeight: "100vh",
      width: "100vw",
      background: "var(--bg-primary)"
    }}>
      {/* Theme Toggle Button – keep for accessibility */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      {/* Only main interactive todo page as per Figma */}
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh"}}>
        <TodoPageFigmaDesign />
      </div>
    </div>
  );
}

export default App;
