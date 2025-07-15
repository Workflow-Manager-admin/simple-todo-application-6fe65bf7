import React, { useState } from "react";
import "./App.css";
import TodoPage from "./TodoPage";
import CompletedTasksPage from "./CompletedTasksPage";

/**
 * PUBLIC_INTERFACE
 * The root App component.
 * Now maintains todos state for both TodoPage and CompletedTasksPage, so task completion is reflected instantly across pages.
 * Handles navigation via NavigationBar and passes state and handlers down.
 */
import NavigationBar from "./components/NavigationBar";

// Demo initial todos (the same as TodoPage demo)
const INITIAL_TODOS_DEMO = [
  { id: 1, title: "Buy groceries", description: "Milk, eggs, bread, and fruits", status: "pending" },
  { id: 2, title: "Walk the dog", description: "At the park", status: "completed" },
  { id: 3, title: "Read a book", description: "", status: "pending" },
  { id: 4, title: "Write code", description: "Finish frontend modal logic", status: "overdue" },
  { id: 5, title: "Meet John", description: "Zoom call at 8pm", status: "pending" },
];

let nextId = 6;

function App() {
  const [page, setPage] = useState("all"); // "all" | "completed"
  const [todos, setTodos] = useState(INITIAL_TODOS_DEMO);

  const handleNavSelect = (nav) => setPage(nav);

  // Add new todo, data: {title, description, status}
  // Used by TodoPage add modal
  const addTodo = (data) => {
    setTodos((curr) => [
      ...curr,
      {
        id: nextId++,
        ...data,
      }
    ]);
  };

  // Edit existing todo by id, update object fields
  // Used by TodoPage edit modal
  const editTodo = (todoId, updatedFields) => {
    setTodos((curr) =>
      curr.map((td) =>
        td.id === todoId ? { ...td, ...updatedFields } : td
      )
    );
  };

  // Delete todo by id
  const deleteTodo = (todoId) => {
    setTodos((curr) => curr.filter((td) => td.id !== todoId));
  };

  // Toggle completed flag for the given id
  // Used in TodoPage list, e.g., on checkmark click
  const toggleTodoComplete = (todoId) => {
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

  // Wrapper for injecting nav handlers/selected state
  const NavBarImpl = (props) => (
    <NavigationBar selected={page} onSelect={handleNavSelect} {...props} />
  );

  return (
    <div className="App">
      {page === "all" ? (
        <TodoPage
          NavigationBarComponent={NavBarImpl}
          todos={todos}
          addTodo={addTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          onToggleComplete={toggleTodoComplete}
        />
      ) : (
        <CompletedTasksPage
          NavigationBarComponent={NavBarImpl}
          todos={todos.filter((td) => td.status === "completed")}
        />
      )}
    </div>
  );
}

export default App;
