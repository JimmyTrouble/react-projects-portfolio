import React from "react";
import ToDoList from "./ToDoList";
import Login from "./Login";
import "./Main.css";

function App() {
  return (
    <>
      <h1 className="AppHeading">React Componets</h1>
      <ToDoList />
      <Login />
    </>
  );
}

export default App;
