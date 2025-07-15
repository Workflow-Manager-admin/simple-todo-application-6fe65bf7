import React from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";

/**
 * PUBLIC_INTERFACE
 * Shows the scrollable todo list. Each item renders with spacing and style matching Figma.
 */
const demoTodos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Read a book", completed: false },
  { id: 4, text: "Write code", completed: false },
  { id: 5, text: "Meet John", completed: false },
];

export default function Todos() {
  return (
    <div className="todos-list">
      {demoTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
