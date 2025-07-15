import React from "react";
import "./StatusBar.css";

/**
 * PUBLIC_INTERFACE
 * Renders the status bar (time, wifi/cell/battery icons).
 * Styles and spacing visually match the Figma top bar.
 */
export default function StatusBar() {
  return (
    <div className="status-bar">
      {/* Typically shown: time and icons */}
      <span className="sb-time">9:41</span>
      <span className="sb-icons">
        <span className="sb-icon-wifi" />
        <span className="sb-icon-cellular" />
        <span className="sb-icon-battery" />
      </span>
    </div>
  );
}
