import React from "react";
import { useState } from "react";
import Task from "./ToDo/Task";
import "./Tasklist.css";

function Tasklist(props) {
  const handleDelete = (taskIndex) => {
    const filterTask = props.task.filter((indexing, idx) => {
      return idx !== taskIndex;
    });
    props.setTask(filterTask);
  };
  return (
    <div className="task-list-container">
      {props.task.map((entry, index) => {
        return (
          <Task itemsName={entry} index={index} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}
export default Tasklist;
