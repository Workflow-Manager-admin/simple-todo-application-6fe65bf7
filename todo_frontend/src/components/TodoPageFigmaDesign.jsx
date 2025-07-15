import React, { useState, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * TodoPageFigmaDesign (INTERACTIVE)
 * Interactive todo app styled per Figma (see prompt for layout/colors).
 * Allows adding, editing, deleting, and toggling todos. No external state or API.
 */
const BACKGROUND_COLOR = "#d6d7ef";
const PRIMARY_ACCENT = "#9395d3";
const TITLE_COLOR = "#fff";
const CARD_SHADOW = "0 4px 4px 0 rgba(0,0,0,0.25)";
const CARD_RADIUS = 15;

const todoBarBase = {
  background: "#fff",
  borderRadius: CARD_RADIUS,
  boxShadow: CARD_SHADOW,
  width: 400,
  height: 82,
  marginBottom: 18,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "relative",
  padding: "0 20px",
  transition: "opacity 0.18s",
};

const iconAreaStyle = {
  width: 25,
  height: 25,
  marginLeft: 10,
  marginRight: 2,
  borderRadius: "50%",
  background: PRIMARY_ACCENT,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
  transition: "background 0.2s",
};

const todoTitleStyle = { color: PRIMARY_ACCENT, fontWeight: 700, fontSize: 17, marginBottom: 2 };
const todoDetailStyle = { color: "#000", fontWeight: 400, fontSize: 12.5, opacity: 0.65 };

// Initial demo data
const initialTodos = [
  { id: 1, title: "Learn React", detail: "Build a todo app", completed: false },
  { id: 2, title: "Grocery Shopping", detail: "Eggs, Bread, Coffee", completed: false },
  { id: 3, title: "Workout", detail: "30min running", completed: true },
];

function getNextId(todos) {
  return todos.length === 0 ? 1 : Math.max(...todos.map(t => t.id)) + 1;
}

// PUBLIC_INTERFACE
function TodoPageFigmaDesign() {
  // State
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all"); // "all" | "completed"
  const [adding, setAdding] = useState(false); // Show add panel
  const [editId, setEditId] = useState(null); // id of todo under edit
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const inputTitleRef = useRef(null);

  // --- Helpers ---
  const filteredTodos = filter === "completed"
    ? todos.filter(t => t.completed)
    : todos;

  // --- Handlers ---
  // PUBLIC_INTERFACE
  function handleAddStart() {
    setEditId(null);
    setInputTitle("");
    setInputDetail("");
    setAdding(true);
    setTimeout(() => inputTitleRef.current && inputTitleRef.current.focus(), 100);
  }
  // PUBLIC_INTERFACE
  function handleAddConfirm() {
    if (!inputTitle.trim()) return;
    setTodos(prev => [
      ...prev,
      { id: getNextId(prev), title: inputTitle.trim(), detail: inputDetail.trim(), completed: false }
    ]);
    setInputTitle("");
    setInputDetail("");
    setAdding(false);
  }
  // PUBLIC_INTERFACE
  function handleEditStart(todo) {
    setEditId(todo.id);
    setInputTitle(todo.title);
    setInputDetail(todo.detail);
    setAdding(false);
    setTimeout(() => inputTitleRef.current && inputTitleRef.current.focus(), 100);
  }
  // PUBLIC_INTERFACE
  function handleEditConfirm(id) {
    setTodos(prev =>
      prev.map((t) =>
        t.id === id
          ? { ...t, title: inputTitle.trim(), detail: inputDetail.trim() }
          : t
      )
    );
    setEditId(null);
    setInputTitle("");
    setInputDetail("");
  }
  // PUBLIC_INTERFACE
  function handleDelete(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
    if (editId === id) {
      setEditId(null);
      setInputTitle("");
      setInputDetail("");
    }
  }
  // PUBLIC_INTERFACE
  function handleToggleComplete(id) {
    setTodos(prev =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }
  // PUBLIC_INTERFACE
  function handleFilter(f) {
    setFilter(f);
  }
  // PUBLIC_INTERFACE
  function handleCancel() {
    setAdding(false);
    setEditId(null);
    setInputTitle("");
    setInputDetail("");
  }
  // Keyboard: Enter for add/edit
  function handleInputKeyDown(e) {
    if (e.key === "Enter") {
      if (editId !== null) {
        handleEditConfirm(editId);
      } else if (adding) {
        handleAddConfirm();
      }
    } else if (e.key === "Escape") {
      handleCancel();
    }
  }

  // --- Components ---
  // PUBLIC_INTERFACE
  function TodoBar({ todo }) {
    const isEditing = editId === todo.id;
    return (
      <div
        style={{
          ...todoBarBase,
          opacity: todo.completed ? 0.53 : 1,
          background: todo.completed ? "#e6e6ec" : "#fff",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {isEditing ? (
            <>
              <input
                ref={inputTitleRef}
                type="text"
                value={inputTitle}
                onChange={e => setInputTitle(e.target.value)}
                placeholder="Title"
                style={{
                  ...todoTitleStyle,
                  padding: "6px 4px",
                  border: "1px solid #c5c7e3",
                  borderRadius: 9,
                  outline: "none",
                  width: 200,
                  marginBottom: 3,
                }}
                maxLength={60}
                onKeyDown={handleInputKeyDown}
                autoFocus
              />
              <input
                type="text"
                value={inputDetail}
                onChange={e => setInputDetail(e.target.value)}
                placeholder="Detail"
                style={{
                  ...todoDetailStyle,
                  padding: "6px 4px",
                  border: "1px solid #c5c7e3",
                  borderRadius: 9,
                  outline: "none",
                  width: 200,
                }}
                maxLength={85}
                onKeyDown={handleInputKeyDown}
              />
            </>
          ) : (
            <>
              <div style={{ ...todoTitleStyle, textDecoration: todo.completed ? "line-through" : undefined }}>
                {todo.title}
              </div>
              <div style={{ ...todoDetailStyle, textDecoration: todo.completed ? "line-through" : undefined }}>
                {todo.detail}
              </div>
            </>
          )}
        </div>
        {/* Complete */}
        <div
          style={{
            ...iconAreaStyle,
            background: todo.completed ? "#46a361" : PRIMARY_ACCENT,
          }}
          title={todo.completed ? "Un-complete" : "Mark complete"}
          onClick={() => handleToggleComplete(todo.id)}
        >
          {/* Check Icon */}
          <svg width="16" height="16" viewBox="0 0 16 16">
            <polyline
              points="2,9 7,14 14,4"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 2.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            />
          </svg>
        </div>
        {/* Delete */}
        <div
          style={iconAreaStyle}
          title="Delete"
          tabIndex={0}
          aria-label="Delete todo"
          onClick={() => handleDelete(todo.id)}
          onKeyDown={e => {
            if (e.key === "Enter") handleDelete(todo.id);
          }}
        >
          {/* Trash icon */}
          <svg width="15" height="15" viewBox="0 0 15 15">
            <rect x="3" y="5" width="9" height="8" rx="1" fill="#fff" opacity="0.4" />
            <rect x="6" y="7" width="1" height="5" fill="#fff" opacity="1" rx="0.5" />
            <rect x="8" y="7" width="1" height="5" fill="#fff" opacity="1" rx="0.5" />
          </svg>
        </div>
        {/* Edit */}
        {isEditing ? (
          <div
            style={{ ...iconAreaStyle, background: "#bbb", cursor: "pointer" }}
            title="Save"
            onClick={() => handleEditConfirm(todo.id)}
          >
            {/* Save/check icon */}
            <svg width="15" height="15" viewBox="0 0 15 15">
              <polyline
                points="2,8 6,13 13,3"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }}
              />
            </svg>
          </div>
        ) : (
          <div
            style={iconAreaStyle}
            title="Edit"
            onClick={() => handleEditStart(todo)}
          >
            {/* Pencil icon */}
            <svg width="15" height="15" viewBox="0 0 15 15">
              <rect
                x="2"
                y="12"
                width="11"
                height="2"
                rx="1"
                fill="#fff"
                opacity="0.29"
              />
              <rect
                x="7"
                y="4"
                width="6"
                height="2"
                rx="1"
                fill="#fff"
                transform="rotate(45 7 4)"
              />
            </svg>
          </div>
        )}
      </div>
    );
  }

  // Add/Edit panel floating above
  function AddEditPanel({ editing }) {
    return (
      <div
        style={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: "translateX(-50%)",
          width: 350,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 6px 18px rgba(30,17,100,0.16)",
          padding: "26px 26px 18px 26px",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{marginBottom:12,fontSize:18,fontWeight:700,color:PRIMARY_ACCENT}}>
          {editing ? "Edit Todo" : "Add Todo"}
        </div>
        <input
          ref={inputTitleRef}
          type="text"
          value={inputTitle}
          onChange={e => setInputTitle(e.target.value)}
          placeholder="Title"
          maxLength={64}
          style={{
            width: "90%",
            fontSize: 15.5,
            padding: "10px 8px",
            borderRadius: 8,
            outline: "none",
            border: "1.5px solid #c5c7e3",
            marginBottom: 10,
            background: "#fcfcfe",
            color: "#373737"
          }}
          onKeyDown={handleInputKeyDown}
        />
        <input
          type="text"
          value={inputDetail}
          onChange={e => setInputDetail(e.target.value)}
          placeholder="Detail"
          maxLength={86}
          style={{
            width: "90%",
            fontSize: 14,
            padding: "8px",
            borderRadius: 8,
            outline: "none",
            border: "1.5px solid #c5c7e3",
            marginBottom: 16,
            background: "#fcfcfe",
            color: "#373737"
          }}
          onKeyDown={handleInputKeyDown}
        />
        <div style={{display:"flex",flexDirection:"row",gap:14,justifyContent:"center"}}>
          <button
            style={{
              background: PRIMARY_ACCENT,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              fontWeight: 700,
              fontSize: 15,
              cursor: inputTitle.trim() ? "pointer" : "not-allowed",
              opacity: inputTitle.trim() ? 1 : 0.7,
              boxShadow: "0 1.5px 6px 0 rgba(0,0,0,0.08)"
            }}
            onClick={editing ? () => handleEditConfirm(editId) : handleAddConfirm}
            disabled={!inputTitle.trim()}
          >
            {editing ? "Save" : "Add"}
          </button>
          <button
            style={{
              background: "#e3e4ee",
              color: "#666",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              fontWeight: 600,
              fontSize: 15,
              marginLeft: 5,
              cursor: "pointer"
            }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // --- RENDER ---
  return (
    <div
      style={{
        position: "relative",
        width: 414,
        height: 896,
        background: BACKGROUND_COLOR,
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
        border: "1px solid #e0e0e0",
        boxSizing: "border-box",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: -7,
          width: 429,
          height: 44,
          zIndex: 10,
          background: "rgba(0,0,0,0)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 18,
            top: 8,
            width: 56,
            height: 12,
            borderRadius: 10,
            background: "rgba(240,240,240,0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 24,
            top: 8,
            width: 80,
            height: 12,
            borderRadius: 10,
            background: "rgba(240,240,240,0.55)",
          }}
        />
      </div>

      {/* App Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 414,
          height: 118,
          background: PRIMARY_ACCENT,
          zIndex: 12,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: "0 1.5px 6px 0 rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
        }}
      >
        {/* "Back" control - just icon for demo */}
        <div
          style={{
            width: 46,
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Menu"
        >
          <svg width="25" height="34" viewBox="0 0 25 34">
            <polyline
              points="20,4 9,17 20,30"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 4,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            />
          </svg>
        </div>
        {/* Title group */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: TITLE_COLOR,
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: ".05em",
              lineHeight: "32px",
              textShadow: "0 1.5px 3px #8883",
            }}
          >
            TODO APP
          </span>
        </div>
        {/* Calendar icon (right) */}
        <div
          style={{
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Simple calendar icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="3" y="8" width="26" height="20" rx="3" fill="#fff" opacity="0.28" />
            <rect x="7" y="14" width="18" height="10" rx="2" fill="#fff" opacity="1" />
            <rect x="11" y="18" width="2" height="2" rx="1" fill={PRIMARY_ACCENT} />
            <rect x="15" y="18" width="2" height="2" rx="1" fill={PRIMARY_ACCENT} />
            <rect x="19" y="18" width="2" height="2" rx="1" fill={PRIMARY_ACCENT} />
          </svg>
        </div>
      </div>

      {/* Todo List group (cards) */}
      <div
        style={{
          position: "absolute",
          top: 128,
          left: 7,
          width: 400,
          height: 494,
          zIndex: 3,
          overflowY: "auto",
          paddingTop: 0,
        }}
      >
        {filteredTodos.length === 0 && (
          <div style={{
            ...todoBarBase,
            background: "#efeff7",
            boxShadow: "none",
            justifyContent: "center",
            color: "#8b8b99",
            fontWeight: 600,
            fontSize: 15
          }}>
            No todos {filter === "completed" ? "completed" : "yet."}
          </div>
        )}
        {filteredTodos.map(todo => (
          <TodoBar key={todo.id} todo={todo} />
        ))}
      </div>

      {/* Add/Edit panel overlays the list when adding or editing */}
      {(adding || editId !== null) && (
        <AddEditPanel editing={editId !== null} />
      )}

      {/* Footer Navigation Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 414,
          height: 68,
          background: "#fff",
          boxShadow: "0 -2px 12px 0 rgba(22,22,22,0.06)",
          zIndex: 24,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
          onClick={() => handleFilter("all")}
          aria-pressed={filter === "all"}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="13" fill={filter === "all" ? PRIMARY_ACCENT : "#eee"} />
            <rect
              x="10"
              y="8"
              width="10"
              height="2"
              fill="#fff"
              rx="1"
              opacity={1}
            />
            <rect
              x="10"
              y="13"
              width="10"
              height="2"
              fill="#fff"
              rx="1"
              opacity={1}
            />
            <rect
              x="10"
              y="18"
              width="6"
              height="2"
              fill="#fff"
              rx="1"
              opacity={1}
            />
          </svg>
          <span style={{ color: filter === "all" ? PRIMARY_ACCENT : "#8b8787", fontSize: 12, fontWeight: 700 }}>All</span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
          onClick={() => handleFilter("completed")}
          aria-pressed={filter === "completed"}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="13" fill={filter === "completed" ? PRIMARY_ACCENT : "#fff"} stroke={PRIMARY_ACCENT} strokeWidth={2} />
            <polyline
              points="10,16 14,20 20,10"
              style={{
                fill: "none",
                stroke: filter === "completed" ? "#fff" : PRIMARY_ACCENT,
                strokeWidth: 2.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            />
          </svg>
          <span style={{ color: filter === "completed" ? PRIMARY_ACCENT : "#8b8787", fontSize: 12, fontWeight: 700 }}>Completed</span>
        </div>
        <div style={{ width: 28 }}></div>
      </div>

      {/* Floating Action Button – Add */}
      <div
        style={{
          position: "absolute",
          right: 28,
          bottom: 108,
          width: 70,
          height: 70,
          borderRadius: "50%",
          boxShadow: CARD_SHADOW,
          zIndex: 30,
          background: PRIMARY_ACCENT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "box-shadow 0.13s linear",
          opacity: adding || editId !== null ? 0.2 : 1,
          pointerEvents: adding || editId !== null ? "none" : undefined,
        }}
        title="Add New Todo"
        onClick={handleAddStart}
        aria-disabled={adding || editId !== null}
      >
        <svg width="42" height="42" viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="18.5" fill={PRIMARY_ACCENT} />
          <rect x="11" y="19" width="20" height="4" rx="2" fill="#fff" />
          <rect x="19" y="11" width="4" height="20" rx="2" fill="#fff" />
        </svg>
      </div>

      {/* --- Figma Preview Image as faint background --- */}
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87d1f6f4-f81b-44ed-82a1-8901c6b4aac7"
        alt="Figma design preview"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.07,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default TodoPageFigmaDesign;
