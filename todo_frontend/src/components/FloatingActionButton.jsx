import React from "react";
import "./FloatingActionButton.css";

/**
 * PUBLIC_INTERFACE
 * Floating action button (FAB) to add a new todo, styled per Figma, with click handler.
 * Props:
 *    - onClick: function
 */
export default function FloatingActionButton({ onClick }) {
  return (
    <button className="fab-btn" aria-label="Add Task" onClick={onClick} tabIndex={0}>
      <span className="fab-plus">+</span>
    </button>
  );
}
