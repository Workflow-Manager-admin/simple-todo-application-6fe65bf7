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
 *  - todos: array of todo objects
 *  - addTodo: function({title, description, status}) => void
 *  - editTodo: function(todoId, updatedFields) => void
 *  - deleteTodo: function(todoId) => void
 *  - onToggleComplete: function(todoId) => void
 */
export default function TodoPage({
  NavigationBarComponent,
  todos,
  addTodo,
  editTodo,
  deleteTodo,
  onToggleComplete,
}) {
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
  const handleAddTodo = (data) => {
    addTodo(data);
    closeModal();
  };

  // Save update to existing todo
  const handleSaveEditTodo = (updated) => {
    if (modal.todo) {
      editTodo(modal.todo.id, updated);
    }
    closeModal();
  };

  // Delete todo (from modal only)
  const handleDeleteTodo = () => {
    if (modal.mode === "edit" && modal.todo) {
      deleteTodo(modal.todo.id);
    }
    closeModal();
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
        onDelete={deleteTodo}
        onToggleComplete={onToggleComplete}
      />
      <FloatingActionButton onClick={openAddModal} />
      <Nav selected="all" />
      {/* Modal (add/edit) flows */}
      <AddEditTodoModal
        open={modal.open}
        mode={modal.mode}
        initial={modal.mode === "edit" ? modal.todo : undefined}
        onDismiss={closeModal}
        onSubmit={modal.mode === "add" ? handleAddTodo : handleSaveEditTodo}
        onDelete={
          modal.mode === "edit"
            ? handleDeleteTodo
            : undefined
        }
      />
    </div>
  );
}
