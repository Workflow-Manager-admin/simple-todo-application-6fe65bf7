import React from "react";
import "./todo_page.css";
import StatusBar from "./components/StatusBar";
import AppBar from "./components/AppBar";
import Todos from "./components/Todos";
import NavigationBar from "./components/NavigationBar";
import FloatingActionButton from "./components/FloatingActionButton";

/**
 * PUBLIC_INTERFACE
 * Renders the main TODO Page for the todo application, composed of
 * Status bar, App bar, todos list, floating action button and navigation bar.
 * Matches hierarchy, layout, and color palette from the Figma design.
 */
export default function TodoPage() {
  return (
    <div className="todo-page-bg">
      <StatusBar />
      <AppBar />
      <Todos />
      <FloatingActionButton />
      <NavigationBar />
    </div>
  );
}
