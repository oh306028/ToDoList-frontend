import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["doing the react project"]);
  const [newTask, setNewTask] = useState();

  const handleInput = (event) => {
    setNewTask(() => event.target.value);
  };

  const handleNewTask = () => {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  };

  return (
    <>
      <div className="container">
        <div className="header-container">
          <h2>To-Do-List</h2>
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={handleInput}
          ></input>
          <button onClick={() => handleNewTask}>Add</button>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
