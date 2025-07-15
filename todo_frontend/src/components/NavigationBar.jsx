import React from "react";
import "./NavigationBar.css";

/**
 * PUBLIC_INTERFACE
 * Displays navigator for 'All' and 'Completed' with icons/text as per the Figma navigation bar.
 */
export default function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="nav-btn selected">
        {/* Icon (All) */}
        <span className="nav-icon" />
        <span className="nav-label">All</span>
      </div>
      <div className="nav-btn">
        {/* Icon (Completed) */}
        <span className="nav-icon" />
        <span className="nav-label">Completed</span>
      </div>
    </div>
  );
}
