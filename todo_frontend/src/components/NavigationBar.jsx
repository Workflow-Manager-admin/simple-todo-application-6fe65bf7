import React from "react";
import "./NavigationBar.css";

/**
 * PUBLIC_INTERFACE
 * NavigationBar displays bottom navigation ("All", "Completed") and calls onSelect(page)
 * Props:
 *   - selected: string ('all' | 'completed')
 *   - onSelect: function(page: string)
 */
export default function NavigationBar({ selected = "all", onSelect }) {
  return (
    <div className="navigation-bar">
      <div
        className={`nav-btn${selected === "all" ? " selected" : ""}`}
        onClick={() => onSelect && onSelect("all")}
        tabIndex={0}
        aria-label="Show All Tasks"
        role="button"
      >
        <span className="nav-icon" />
        <span className="nav-label">All</span>
      </div>
      <div
        className={`nav-btn${selected === "completed" ? " selected" : ""}`}
        onClick={() => onSelect && onSelect("completed")}
        tabIndex={0}
        aria-label="Show Completed Tasks"
        role="button"
      >
        <span className="nav-icon" />
        <span className="nav-label">Completed</span>
      </div>
    </div>
  );
}
