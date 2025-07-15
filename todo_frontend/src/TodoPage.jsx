import React, { useState } from "react";
import "./todo_page.css";
import StatusBar from "./components/StatusBar";
import AppBar from "./components/AppBar";
import Todos from "./components/Todos";
import NavigationBar from "./components/NavigationBar";
import FloatingActionButton from "./components/FloatingActionButton";
import AddEditTodoModal from "./components/AddEditTodoModal";
import "./components/AddEditTodoModal.css"; // Styles for modal

/**
 * PUBLIC_INTERFACE
 * Renders the main TODO Page for the todo application, with "add/edit" modal flows,
 * and bottom navigation bar optionally injected for navigation switching.
 * Props:
 *  - NavigationBarComponent: optional, component or function to render navigation bar, should handle selected/onSelect
 */
const INITIAL_TODOS_DEMO = [
  { id: 1, title: "Buy groceries", description: "Milk, eggs, bread, and fruits", status: "pending" },
  { id: 2, title: "Walk the dog", description: "At the park", status: "completed" },
  { id: 3, title: "Read a book", description: "", status: "pending" },
  { id: 4, title: "Write code", description: "Finish frontend modal logic", status: "overdue" },
  { id: 5, title: "Meet John", description: "Zoom call at 8pm", status: "pending" },
];

let nextId = 6;

export default function TodoPage({ NavigationBarComponent }) {
  // Main todos state
  const [todos, setTodos] = useState(INITIAL_TODOS_DEMO);

  // Modal state: { open, mode, todo? }
  const [modal, setModal] = useState({ open: false, mode: "add", todo: null });

  // Handler: open add modal
  const openAddModal = () =>
    setModal({ open: true, mode: "add", todo: null });

  // Handler: open edit modal for selected todo
  const openEditModal = (todo) =>
    setModal({ open: true, mode: "edit", todo });

  // Handler: close modal
  const closeModal = () =>
    setModal((m) => ({ ...m, open: false }));

  // Add new todo
  const addTodo = (data) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        ...data,
      },
    ]);
    closeModal();
  };

  // Save update to existing todo
  const saveEditTodo = (updated) => {
    setTodos((curr) =>
      curr.map((td) =>
        td.id === modal.todo.id ? { ...td, ...updated } : td
      )
    );
    closeModal();
  };

  // Delete todo
  const deleteTodo = (todoId) => {
    if (
      !modal.open ||
      (modal.mode === "edit" && modal.todo?.id !== todoId)
    ) return; // Prevent deletes not in modal
    setTodos((curr) => curr.filter((td) => td.id !== todoId));
    closeModal();
  };

  // Toggle complete
  const toggleComplete = (todoId) => {
    setTodos((curr) =>
      curr.map((td) =>
        td.id === todoId
          ? {
              ...td,
              status: td.status === "completed" ? "pending" : "completed",
            }
          : td
      )
    );
  };

  // Select which NavigationBar to render (prop or default)
  const Nav = NavigationBarComponent || NavigationBar;

  return (
    <div className="todo-page-bg">
      <StatusBar />
      <AppBar />
      <Todos
        todos={todos}
        onEdit={openEditModal}
        onDelete={(id) => setTodos((curr) => curr.filter((td) => td.id !== id))}
        onToggleComplete={toggleComplete}
      />
      <FloatingActionButton onClick={openAddModal} />
      <Nav selected="all" />
      {/* Modal (add/edit) flows */}
      <AddEditTodoModal
        open={modal.open}
        mode={modal.mode}
        initial={modal.mode === "edit" ? modal.todo : undefined}
        onDismiss={closeModal}
        onSubmit={modal.mode === "add" ? addTodo : saveEditTodo}
        onDelete={
          modal.mode === "edit"
            ? () => deleteTodo(modal.todo.id)
            : undefined
        }
      />
    </div>
  );
}
