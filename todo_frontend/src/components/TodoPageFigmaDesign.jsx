import React from "react";

/**
 * PUBLIC_INTERFACE
 * TodoPageFigmaDesign
 * This React component is a direct translation of the Figma "TODO PAGE" frame (id: 9:680)
 * based on the provided Figma JSON (attachments/20250715_111428_figma_9680.json).
 * Visual details (colors, border radius, shadow, positioning, etc.) are derived from the JSON
 * and referenced child nodes for an accurate on-design appearance.
 */
const BACKGROUND_COLOR = "#d6d7ef"; // rgba(214,215,239,1) from main background RECTANGLE (9:681)
const PRIMARY_ACCENT = "#9395d3";   // button/app bar color from Figma theme
const TITLE_COLOR = "#fff";         // For appBar text

// Helper: Drop shadow for cards and FAB (per Figma effect)
const cardShadow = "0 4px 4px 0 rgba(0,0,0,0.25)";
const cardRadius = 15;

// Helper: Todo entry bar (white with shadow)
const todoBarStyle = {
  background: "#fff",
  borderRadius: cardRadius,
  boxShadow: cardShadow,
  width: 400,
  height: 82,
  marginBottom: 18,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "relative",
  padding: "0 20px",
};

// Helper: Title/Subtitle area in each Todo bar
const titleAreaStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
};

// Helper: Icon style (check, trash, pencil)
const iconAreaStyle = {
  width: 25,
  height: 25,
  marginLeft: 10,
  marginRight: 2,
  borderRadius: "50%",
  background: "#9395d3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
  transition: "background 0.2s",
};

// Main component
const TodoPageFigmaDesign = () => (
  <div
    style={{
      position: "relative",
      width: 414,
      height: 896,
      background: BACKGROUND_COLOR,
      overflow: "hidden",
      fontFamily:
        "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
      // Mobile preview frame only: add a subtle border for visual clarity.
      border: "1px solid #e0e0e0",
      boxSizing: "border-box",
    }}
  >
    {/* --- Status bar (device OS bar) --- */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: -7,
        width: 429,
        height: 44,
        zIndex: 10,
        background: "rgba(0,0,0,0)",
        // Visually, it's just empty, can add icons if needed.
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

    {/* --- App Bar (top header group) --- */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 414,
        height: 118,
        background: PRIMARY_ACCENT,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        zIndex: 12,
        boxShadow: "0 1.5px 6px 0 rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
      }}
    >
      {/* "Back" control area (approximate) */}
      <div
        style={{
          width: 46,
          height: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Unicode left arrow */}
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
          <rect
            x="3"
            y="8"
            width="26"
            height="20"
            rx="3"
            fill="#fff"
            opacity="0.28"
          />
          <rect
            x="7"
            y="14"
            width="18"
            height="10"
            rx="2"
            fill="#fff"
            opacity="1"
          />
          <rect
            x="11"
            y="18"
            width="2"
            height="2"
            rx="1"
            fill={PRIMARY_ACCENT}
          />
          <rect
            x="15"
            y="18"
            width="2"
            height="2"
            rx="1"
            fill={PRIMARY_ACCENT}
          />
          <rect
            x="19"
            y="18"
            width="2"
            height="2"
            rx="1"
            fill={PRIMARY_ACCENT}
          />
        </svg>
      </div>
    </div>

    {/* --- Todo List group (cards) --- */}
    <div
      style={{
        position: "absolute",
        top: 128, // Below app bar
        left: 7,
        width: 400,
        height: 494,
        zIndex: 3,
        overflowY: "auto",
        paddingTop: 0,
      }}
    >
      {/* Five example todo bars. Data is not specified, so titles and actions are approximate */}
      {[...Array(5)].map((_, i) => (
        <div key={i} style={todoBarStyle}>
          <div style={titleAreaStyle}>
            <div
              style={{
                color: "#9395d3",
                fontWeight: 700,
                fontSize: 17,
                marginBottom: 2,
              }}
            >
              TODO TITLE
            </div>
            <div
              style={{
                color: "#000",
                fontWeight: 400,
                fontSize: 12.5,
                opacity: 0.65,
              }}
            >
              TODO SUB TITLE
            </div>
          </div>
          <div style={iconAreaStyle} title="Complete">
            {/* Simple check mark */}
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
          <div style={iconAreaStyle} title="Delete">
            {/* Trash icon approximation */}
            <svg width="15" height="15" viewBox="0 0 15 15">
              <rect
                x="3"
                y="5"
                width="9"
                height="8"
                rx="1"
                fill="#fff"
                opacity="0.4"
              />
              <rect
                x="6"
                y="7"
                width="1"
                height="5"
                fill="#fff"
                opacity="1"
                rx="0.5"
              />
              <rect
                x="8"
                y="7"
                width="1"
                height="5"
                fill="#fff"
                opacity="1"
                rx="0.5"
              />
            </svg>
          </div>
          <div style={iconAreaStyle} title="Edit">
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
        </div>
      ))}
    </div>

    {/* --- Footer Navigation Bar --- */}
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
      {/* Navigation button (playlist) */}
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="13" fill={PRIMARY_ACCENT} />
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
        <span style={{color:PRIMARY_ACCENT,fontSize:12,fontWeight:700}}>All</span>
      </div>
      {/* Navigation button (tick) */}
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="13" fill="#fff" stroke={PRIMARY_ACCENT} strokeWidth={2}/>
          <polyline
            points="10,16 14,20 20,10"
            style={{
              fill: "none",
              stroke: PRIMARY_ACCENT,
              strokeWidth: 2.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          />
        </svg>
        <span style={{color:"#8b8787",fontSize:12,fontWeight:700}}>Completed</span>
      </div>
      {/* Spacer */}
      <div style={{width:28}}></div>
    </div>

    {/* --- Floating Action Button (FAB) --- */}
    <div
      style={{
        position: "absolute",
        right: 28,
        bottom: 108,
        width: 70,
        height: 70,
        borderRadius: "50%",
        boxShadow: cardShadow,
        zIndex: 30,
        background: PRIMARY_ACCENT,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "box-shadow 0.13s linear",
      }}
      title="Add New Todo"
    >
      <svg width="42" height="42" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="18.5" fill="#9395d3" />
        <rect
          x="11"
          y="19"
          width="20"
          height="4"
          rx="2"
          fill="#fff"
        />
        <rect
          x="19"
          y="11"
          width="4"
          height="20"
          rx="2"
          fill="#fff"
        />
      </svg>
    </div>

    {/* --- Figma Preview Image as a faint background (optional for dev) --- */}
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

export default TodoPageFigmaDesign;
