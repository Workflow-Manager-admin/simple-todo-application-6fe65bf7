import React from "react";

// PUBLIC_INTERFACE
/**
 * AddTodo component skeleton matching Figma "ADD TODO" frame (414x896, white background).
 * For each Figma child node, insert a placeholder and comment referencing its location (attachments/figma_{childId}.json).
 * Replace placeholders with actual components as the UI implementation progresses.
 */
const AddTodo = () => (
  <div
    style={{
      position: "relative",
      width: 414,
      height: 896,
      background: "#FFFFFF",
      overflow: "hidden",
    }}
    data-testid="add-todo-root"
  >
    {/* === Figma ADD TODO children === */}
    {/* 1. Background rectangle: see attachments/figma_9:740.json */}
    {/* Placeholder: background visual. Will be replaced with content if needed. */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      aria-hidden="true"
    />

    {/* 2. App Bar group: see attachments/figma_9:741.json */}
    {/* Placeholder for App Bar/Title/Header */}
    {/* See attachments/figma_9:741.json for structure, children: [9:742, 9:743, 9:745] */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 414,
        height: 118,
        zIndex: 1,
      }}
      data-testid="app-bar"
    >
      {/* Background color for AppBar: see 9:742 */}
      {/* Title: see 9:743 ("Add Task") */}
      {/* Back button vector: see 9:745 */}
      {/* Children details in respective Figma JSONs */}
      {/* e.g., attachments/figma_9:742.json, attachments/figma_9:743.json, attachments/figma_9:744.json, attachments/figma_9:745.json */}
    </div>

    {/* 3. Status Bar (device OS bar): see attachments/figma_9:746.json */}
    {/* Placeholder for potential mobile status indicator area */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: -15,  // Status bar extends left/right beyond main frame
        width: 429, // per Figma absoluteBoundingBox
        height: 44,
        zIndex: 2,
        opacity: 0.8,
      }}
      data-testid="status-bar"
    >
      {/* See attachments/figma_9:746.json for details */}
    </div>

    {/* 4. Enter ToDo Title area: Titles group. See attachments/figma_9:747.json */}
    {/* Placeholder input/title group.
        Main text: "Title" (9:748), underline (9:749) */}
    <div
      style={{
        position: "absolute",
        top: 161, // position estimate: y = -791 - (-952) = 161
        left: 32, // x = -282 - (-311) = 29 (approx), add small offset for left margin
        width: 356,
        height: 29,
        zIndex: 3,
      }}
      data-testid="todo-title-input"
    >
      {/* Title placeholder and underline. See 9:748 and 9:749 */}
      {/* Could be replaced with an <input> or <TextField> in real code */}
    </div>

    {/* 5. Enter ToDo Detail area: Titles group. See attachments/figma_9:750.json */}
    {/* Placeholder for detail/description input (text, line underline) */}
    <div
      style={{
        position: "absolute",
        top: 233, // approximate: Figma y offset
        left: 35,
        width: 356,
        height: 29,
        zIndex: 4,
      }}
      data-testid="todo-detail-input"
    >
      {/* Detail area placeholder.
          Main text: "Detail" (9:751), underline (9:752) */}
      {/* See attachments/figma_9:751.json and attachments/figma_9:752.json */}
    </div>

    {/* 6. Add Button group: see attachments/figma_9:753.json */}
    <div
      style={{
        position: "absolute",
        top: 280, // approx. y: position based on Figma's y minus parent's y
        left: 17, // x: -297 - (-311) = 14
        width: 386,
        height: 65,
        zIndex: 5,
      }}
      data-testid="add-button"
    >
      {/* Placeholder for the button ("ADD"), see children: 9:754 (rectangle bg), 9:755 (label), 9:756 */}
      {/* See attachments/figma_9:754.json, attachments/figma_9:755.json, attachments/figma_9:756.json */}
      {/* Replace with a <button> when implementing */}
    </div>

    {/* === Preview background image for design reference [optional] === */}
    <img
      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dadd684-b363-49d3-8051-f7185df4d4af"
      alt="Figma design preview"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.08,
        pointerEvents: "none",
        zIndex: 99,
      }}
      aria-hidden="true"
    />

    {/* TODO: Replace each placeholder with actual implementation using the referenced Figma JSONs */}
  </div>
);

export default AddTodo;
