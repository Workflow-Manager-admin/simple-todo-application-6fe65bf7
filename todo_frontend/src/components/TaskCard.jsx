import React from "react";

/**
 * PUBLIC_INTERFACE
 * TaskCard renders a completed task in the "Completed Tasks" page per the Figma-inspired design.
 * Props:
 *   - title: string (main header)
 *   - subtitle: string (sub-header/details)
 * Styles, color, and structure matches assets/completed_task_page_design_notes.md.
 */
export default function TaskCard({ title, subtitle }) {
  // DESIGN: match pixel-perfect Figma specification (card border-radius, box-shadow, spacing)
  return (
    <div className="task-card">
      <div className="task-card-title">{title}</div>
      <div className="task-card-subtitle">{subtitle}</div>
    </div>
  );
}
