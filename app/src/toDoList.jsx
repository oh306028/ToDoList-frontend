import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["doing the react project"]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
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
          <button className="add-button" onClick={handleNewTask}>
            Add
          </button>
        </div>
        <ul>
          {tasks.map((element, index) => (
            <li key={index}>
              <p>{element}</p>

              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
