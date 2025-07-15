import React from "react";
import "./AppBar.css";

/**
 * PUBLIC_INTERFACE
 * AppBar for the todos app: has calendar icon, title, and trailing icon holders.
 */
export default function AppBar() {
  // DESIGN: large appbar with title centered, all spacing handled by CSS
  return (
    <div className="app-bar">
      <div className="app-bar-content">
        <span className="app-bar-icon calendar" />
        <span className="app-bar-title">Todo App</span>
        <span className="app-bar-icon settings" />
      </div>
    </div>
  );
}
