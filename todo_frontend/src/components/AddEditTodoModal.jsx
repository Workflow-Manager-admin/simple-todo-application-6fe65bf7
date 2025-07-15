import React, { useState, useEffect } from "react";
import StatusIconSelector from "./StatusIconSelector";

// Example status icons as SVG (in production, split into icon files or use <img /> or imports)
function PendingIcon({ color = "#bdbdbd" }) {
  return (
    <svg width="18" height="18" aria-hidden="true" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="7" fill={color} />
      <rect x="8.3" y="4" width="1.4" height="6" fill="#fff"/>
      <rect x="8.3" y="11" width="1.4" height="3" fill="#fff"/>
    </svg>
  );
}
function CompletedIcon({ color = "#48b865" }) {
  return (
    <svg width="18" height="18" aria-hidden="true" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="7" fill={color} />
      <polyline points="6,9.5 9,13 13,6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function OverdueIcon({ color = "#e87a41" }) {
  return (
    <svg width="18" height="18" aria-hidden="true" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="7" fill={color} />
      <rect x="8.25" y="5" width="1.5" height="6" fill="#fff"/>
      <circle cx="9" cy="13" r="1" fill="#fff"/>
    </svg>
  );
}

// List of statuses and their labels and icons
const STATUS_LIST = [
  { label: "Pending", value: "pending", icon: <PendingIcon color="#bdbdbd" /> },
  { label: "Completed", value: "completed", icon: <CompletedIcon color="#48b865" /> },
  { label: "Overdue", value: "overdue", icon: <OverdueIcon color="#e87a41" /> },
];

/**
 * PUBLIC_INTERFACE
 * AddEditTodoModal provides the form/modal for adding or editing a todo.
 * Props:
 *   - open: boolean (show/hide modal)
 *   - mode: "add" | "edit"
 *   - initial (object, for edit): { title, description, status }
 *   - onDismiss: () => void
 *   - onSubmit: (todoObj: { title, description, status }) => void
 *   - onDelete: (optional, for edit): () => void
 */
export default function AddEditTodoModal({
  open,
  mode,
  initial,
  onDismiss,
  onSubmit,
  onDelete,
}) {
  const [title, setTitle] = useState(initial?.title || "");
  const [desc, setDesc] = useState(initial?.description || "");
  const [status, setStatus] = useState(initial?.status || "pending");
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle(initial?.title || "");
      setDesc(initial?.description || "");
      setStatus(initial?.status || "pending");
      setDirty(false);
    }
  }, [open, initial]);

  useEffect(() => {
    if (!open) return;
    if (mode === "edit") {
      setDirty(
        title !== (initial?.title || "") ||
        desc !== (initial?.description || "") ||
        status !== (initial?.status || "pending")
      );
    } else {
      setDirty(!!title);
    }
  }, [title, desc, status, mode, initial, open]);

  // Modal/backdrop styles and animation
  if (!open) return null;
  return (
    <div className="add-edit-modal-backdrop" tabIndex={-1}>
      <div className="add-edit-modal-panel">
        {/* Header bar */}
        <div className="modal-bar">
          <button
            className="modal-back-btn"
            aria-label="Back"
            onClick={onDismiss}
            tabIndex={0}
          >
            <svg width="28" height="28" viewBox="0 0 28 28">
              <polyline
                points="17,7 10,14 17,21"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="modal-title">
            {mode === "add" ? "Add Todo" : "Edit Todo"}
          </div>
          <div style={{ width: 32 }} /> {/* Spacer for symmetry */}
        </div>
        {/* Form */}
        <form
          className="todo-form"
          onSubmit={e => {
            e.preventDefault();
            if (dirty && title.trim()) {
              onSubmit({
                title: title.trim(),
                description: desc,
                status: status,
              });
            }
          }}
          tabIndex={0}
        >
          <label className="todo-label">
            <input
              className="todo-input"
              required
              placeholder="Title"
              value={title}
              onInput={e => setTitle(e.target.value)}
              onChange={e => setTitle(e.target.value)}
              maxLength={100}
              style={{ fontSize: 20, fontWeight: 600, border: "none" }}
              aria-label="Title"
              autoFocus
            />
          </label>
          <label className="todo-label">
            <textarea
              className="todo-input"
              placeholder="Description"
              value={desc}
              onInput={e => setDesc(e.target.value)}
              onChange={e => setDesc(e.target.value)}
              maxLength={400}
              style={{
                fontSize: 16,
                minHeight: 56,
                border: "none",
                resize: "vertical",
                marginTop: 6,
              }}
              aria-label="Description"
            />
          </label>
          <div style={{ marginTop: 10 }}>
            <div className="status-select-label">Status</div>
            <StatusIconSelector
              statuses={STATUS_LIST}
              selected={status}
              onSelect={setStatus}
            />
          </div>
          {/* Action Bar */}
          <div className="todo-form-actions">
            {mode === "edit" && typeof onDelete === "function" && (
              <button
                type="button"
                className="todo-form-delbtn"
                tabIndex={0}
                onClick={() => {
                  if (
                    window.confirm("Delete this todo? This action cannot be undone.")
                  ) {
                    onDelete();
                  }
                }}
              >
                Delete
              </button>
            )}
            <button
              type="submit"
              className="todo-form-addbtn"
              disabled={!dirty || !title.trim()}
              tabIndex={0}
            >
              {mode === "add" ? "Add" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
