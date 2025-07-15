import React, { useState, useEffect } from 'react';
import './App.css';
// Import TodoPage and AddTodo components
import TodoPage from "./components/TodoPage";
import AddTodo from "./components/AddTodo";
import TodoPageFigmaDesign from "./components/TodoPageFigmaDesign";

/*
  This App renders:
   - Theme toggle in the top right
   - Both TodoPage ("Todo List" view) and AddTodo ("Add Task" view) below
   - Both sections are clearly labeled and have a simple, responsive layout
   - Todos and AddTodo are stacked on small screens and side-by-side on wider
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
      <header className="App-header app-main-header">
        {/* Theme Toggle Button */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        
        {/* Main Content Container: Shows both TodoPage and AddTodo */}
        <div className="todo-section-container">
          {/* === SECTION: Todo List / Page === */}
          <section className="todo-section">
            {/* -- Start TodoPage Section -- */}
            <h2 className="section-title">Todo List (Preview)</h2>
            <TodoPage />
            {/* Figma DESIGN: Full layout matching Figma */}
            <h2 className="section-title" style={{marginTop:32, color:"#9395d3"}}>TodoPageFigmaDesign (Figma style)</h2>
            <TodoPageFigmaDesign />
            {/* -- End TodoPage Section -- */}
          </section>
          {/* === SECTION: Add Todo === */}
          <section className="addtodo-section">
            {/* -- Start AddTodo Section -- */}
            <h2 className="section-title">Add New Todo (Preview)</h2>
            <AddTodo />
            {/* -- End AddTodo Section -- */}
          </section>
        </div>

        {/* Supporting info / code instructions */}
        <div style={{marginTop: 24, fontSize: "1rem", color: "var(--text-secondary)"}}>
          <p>
            Both the Todo List (<code>TodoPage</code>) and Add Todo (<code>AddTodo</code>) components are rendered above.
          </p>
          <p>
            Current theme: <strong>{theme}</strong>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
