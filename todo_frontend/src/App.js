import React from "react";
import "./App.css";
import TodoPage from "./TodoPage";

/**
 * PUBLIC_INTERFACE
 * The root App component.
 * Renders the main TodoPage as the sole content.
 * All default starter code and React logo content have been removed.
 */
function App() {
  return (
    <div className="App">
      <TodoPage />
    </div>
  );
}

export default App;
