import React from "react";
import "./StatusBar.css";

/**
 * PUBLIC_INTERFACE
 * Renders the status bar (time, wifi/cell/battery icons).
 * Styles and spacing visually match the Figma top bar.
 */
export default function StatusBar() {
  // DESIGN: Absolutely positioned, slightly overflowing left/right, standard time + 3 fake icons
  return (
    <div className="status-bar">
      <span className="sb-time">9:41</span>
      <span className="sb-icons">
        <span className="sb-icon-wifi" />
        <span className="sb-icon-cellular" />
        <span className="sb-icon-battery" />
      </span>
    </div>
  );
}
