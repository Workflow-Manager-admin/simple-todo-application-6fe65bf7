import React, { useState } from "react";
import "./App.css";
import TodoPage from "./TodoPage";
import CompletedTasksPage from "./CompletedTasksPage";

/**
 * PUBLIC_INTERFACE
 * The root App component.
 * Top-level handles navigation between "All Tasks" and "Completed Tasks" via bottom navigation bar.
 */
import NavigationBar from "./components/NavigationBar";

function App() {
  const [page, setPage] = useState("all"); // "all" | "completed"

  const handleNavSelect = (nav) => setPage(nav);

  // Wrapper for injecting nav handlers/selected state
  const NavBarImpl = (props) => (
    <NavigationBar selected={page} onSelect={handleNavSelect} {...props} />
  );

  return (
    <div className="App">
      {page === "all" ? (
        <TodoPage NavigationBarComponent={NavBarImpl} />
      ) : (
        <CompletedTasksPage NavigationBarComponent={NavBarImpl} />
      )}
    </div>
  );
}

export default App;
