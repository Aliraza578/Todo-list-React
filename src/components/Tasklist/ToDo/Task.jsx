import React from "react";
import { useState } from "react";
import "./Task.css";

const Task = (props) => {
  const [isDone, setIsDone] = useState(false);

  const markAsDone = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="task-list-container">
      <div className={`task-list ${isDone ? "done" : ""}`}>
        <p>{props.itemsName}</p>
      </div>
      <button onClick={markAsDone} className="btn-color-green task-list-items">
        Mark As Done
      </button>
      <button
        onClick={() => props.handleDelete(props.index)}
        className="btn-color task-list-items"
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
