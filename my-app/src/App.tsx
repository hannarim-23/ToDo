import React from "react";
import "./App.css";
import TodoList from "./Organism/Todolist";
//import {taskItems, taskItems2, taskItems3} from "./View/view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />

        </header>
    </div>
  );
}

export default App;
