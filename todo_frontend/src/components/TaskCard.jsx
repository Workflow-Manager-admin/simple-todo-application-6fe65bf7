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
  return (
    <div style={{
      width: 400,
      minHeight: 82,
      margin: "0 auto",
      background: "var(--card-bg, #fff)",
      borderRadius: 15,
      boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "12px 16px",
      marginBottom: 0, // all spacing happens in parent or via gap
    }}>
      <div style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 18,
        fontWeight: 700,
        color: "var(--accent-main, #9395D3)",
        marginBottom: 4,
        textTransform: "none",
        letterSpacing: "normal",
        lineHeight: "21px"
      }}>
        {title}
      </div>
      <div style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: "var(--text-main, #000)",
        lineHeight: "17px"
      }}>
        {subtitle}
      </div>
    </div>
  );
}
