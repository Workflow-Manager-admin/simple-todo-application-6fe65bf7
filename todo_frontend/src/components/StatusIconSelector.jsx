import React from "react";

/**
 * PUBLIC_INTERFACE
 * StatusIconSelector displays status choices as clickable icons (e.g., Pending, Completed, Overdue).
 * Props:
 *   - statuses: [{ label: string, value: string, icon: ReactNode }]
 *   - selected: string (currently selected value)
 *   - onSelect: function(statusValue: string)
 * Usage: Used in Add/Edit modals for selecting todo status.
 */
export default function StatusIconSelector({ statuses, selected, onSelect }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      margin: "16px 0"
    }}>
      {statuses.map((status) => (
        <button
          key={status.value}
          aria-label={status.label}
          type="button"
          onClick={() => onSelect(status.value)}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            padding: 0,
            cursor: "pointer",
            filter: selected === status.value ? "none" : "grayscale(0.85) opacity(0.6)",
            transform: selected === status.value ? "scale(1.08)" : "scale(1)",
            transition: "filter 0.15s, transform 0.15s"
          }}
        >
          <span style={{
            display: "flex",
            borderRadius: "7px",
            background: selected === status.value ? "#9395d3" : "transparent",
            padding: "4px"
          }}>
            {status.icon}
          </span>
        </button>
      ))}
    </div>
  );
}
