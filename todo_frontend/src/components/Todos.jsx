import React from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";

/**
 * PUBLIC_INTERFACE
 * Shows the scrollable todo list. Includes "edit", "delete", "complete" icons per the Figma flows.
 * Props:
 *   - todos: [{ id, title, description, status }]
 *   - onEdit: (todoObj) => void
 *   - onDelete: (todoId) => void
 *   - onToggleComplete: (todoId) => void
 */
export default function Todos({
  todos = [],
  onEdit,
  onDelete,
  onToggleComplete,
}) {
  // Icons from Figma-style, inline SVG
  function EditIcon() {
    return (
      <svg height="23" width="23" viewBox="0 0 22 22" aria-hidden="true">
        <rect fill="none" width="22" height="22"/>
        <path d="M5 17l3-0.3L17 7.1c0.6-0.6 0.6-1.4 0-2l-2.1-2.1c-0.6-0.6-1.4-0.6-2 0L5.9 13l-0.3 3z" fill="#9395d3" />
      </svg>
    );
  }
  function DeleteIcon() {
    return (
      <svg height="22" width="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect fill="none" width="22" height="22"/>
        <path d="M7 8h8v10H7zm1-4h6v2H8z" fill="#d24a1a"/>
        <rect x="5" y="6" width="12" height="2" rx="0.5" fill="#9395d3"/>
      </svg>
    );
  }
  function CompleteIcon({ active }) {
    return active ? (
      <svg height="22" width="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect fill="none" width="22" height="22"/>
        <circle cx="11" cy="11" r="8" fill="#48b865"/>
        <path d="M8 11.5l2.1 2 3.4-4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ) : (
      <svg height="22" width="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect fill="none" width="22" height="22"/>
        <circle cx="11" cy="11" r="8" fill="#bdbdbd"/>
      </svg>
    );
  }

  function statusToCompleted(status) {
    return status === "completed";
  }

  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <div key={todo.id} className={`todo-item${statusToCompleted(todo.status) ? " completed" : ""}`}>
          <span
            className="todo-check"
            role="button"
            tabIndex={0}
            aria-label={statusToCompleted(todo.status) ? "Mark as pending" : "Mark as completed"}
            onClick={() => onToggleComplete && onToggleComplete(todo.id)}
            style={{ cursor: "pointer", marginRight: 10 }}
          >
            <CompleteIcon active={statusToCompleted(todo.status)}/>
          </span>
          <span className="todo-text" title={todo.description || todo.title}>{todo.title}</span>
          <span className="todo-item-actions" style={{ marginLeft: "auto", display: "flex", gap: 9 }}>
            <button
              className="todo-action-btn"
              aria-label="Edit"
              tabIndex={0}
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => onEdit && onEdit(todo)}
            >
              <EditIcon/>
            </button>
            <button
              className="todo-action-btn"
              aria-label="Delete"
              tabIndex={0}
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => onDelete && onDelete(todo.id)}
            >
              <DeleteIcon/>
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
