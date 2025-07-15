import React from "react";
import "./todo_page.css";
import StatusBar from "./components/StatusBar";
import AppBar from "./components/AppBar";
import NavigationBar from "./components/NavigationBar";
import TaskCard from "./components/TaskCard";

/**
 * PUBLIC_INTERFACE
 * CompletedTasksPage renders the "Completed Tasks" layout according to extracted Figma/UI requirements.
 * Presents only completed tasks as static display cards.
 * Structure:
 *  - StatusBar (top)
 *  - AppBar (custom for Completed Tasks)
 *  - List of completed TaskCard components
 *  - NavigationBar (bottom, "Completed" nav selected)
 * Props:
 *  - NavigationBarComponent: optional, for navigation control
 */
const COMPLETED_TASKS_DEMO = [
  { id: 1, title: "Finish report", subtitle: "Sent to Mary on July 11" },
  { id: 2, title: "Grocery shopping", subtitle: "Bought eggs, milk, bread" },
  { id: 3, title: "Plan vacation", subtitle: "Booked flights, July 18–22" },
];

export default function CompletedTasksPage({ NavigationBarComponent }) {
  const Nav = NavigationBarComponent || NavigationBar;

  return (
    <div
      className="todo-page-bg"
      style={{
        background: "var(--bg-canvas, #D6D7EF)",
        minHeight: 896,
        width: 414,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Helvetica Neue', Arial, sans-serif"
      }}
    >
      <StatusBar />
      {/* Custom App Bar */}
      <div style={{
        height: 118,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        marginBottom: 0
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--accent-main, #9395D3)",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}>
          <span style={{
            color: "#fff",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "1px"
          }}>
            Completed Tasks
          </span>
        </div>
      </div>
      {/* Completed Task Cards List */}
      <main style={{
        marginTop: 60,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        alignItems: "center",
        minHeight: 470,
      }} aria-label="Completed Tasks List">
        {COMPLETED_TASKS_DEMO.map((t) => (
          <TaskCard key={t.id} title={t.title} subtitle={t.subtitle} />
        ))}
      </main>
      <Nav selected="completed" />
    </div>
  );
}
