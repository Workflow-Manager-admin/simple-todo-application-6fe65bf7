import React from "react";
import "./FloatingActionButton.css";

/**
 * PUBLIC_INTERFACE
 * Floating action button (FAB) to add a new todo, styled as in Figma (circular, purple + icon).
 */
export default function FloatingActionButton() {
  return (
    <button className="fab-btn" aria-label="Add Task">
      <span className="fab-plus">+</span>
    </button>
  );
}
