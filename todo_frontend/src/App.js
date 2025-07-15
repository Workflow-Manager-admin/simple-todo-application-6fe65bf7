import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/*
  To use the AddTodo component (see src/components/AddTodo.jsx for layout referencing Figma),
  import as:
    import AddTodo from "./components/AddTodo";
  and include <AddTodo /> in your render (e.g., below the header).
*/

function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Example usage of AddTodo component for demo purposes (commented out by default) */}
        {/*
          import AddTodo from "./components/AddTodo";
          <AddTodo />
        */}
      </header>
    </div>
  );
}

export default App;
