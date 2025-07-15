import React from "react";
import "./TodoItem.css";

/**
 * PUBLIC_INTERFACE
 * Atomic todo item, renders a single todo's text and completion state, styled as Figma card.
 */
export default function TodoItem({ text, completed }) {
  return (
    <div className={`todo-item${completed ? " completed" : ""}`}>
      <span className="todo-check">{completed ? "✔" : ""}</span>
      <span className="todo-text">{text}</span>
    </div>
  );
}
