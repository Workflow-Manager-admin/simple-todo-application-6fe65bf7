import React from "react";
import "./AppBar.css";

/**
 * PUBLIC_INTERFACE
 * AppBar for the todos app: has calendar icon, title, and trailing icon holders.
 */
export default function AppBar() {
  return (
    <div className="app-bar">
      {/* Leading icon (calendar) */}
      <span className="app-bar-icon calendar" />
      {/* Title */}
      <span className="app-bar-title">Todo App</span>
      {/* Trailing icon - placeholder for future actions */}
      <span className="app-bar-icon settings" />
    </div>
  );
}
