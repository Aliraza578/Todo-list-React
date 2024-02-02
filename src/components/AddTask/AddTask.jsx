import React from "react";
import { useState } from "react";
import "./AddTask.css";

function AddTask(props) {
  const [value, setValue] = useState("");
  
  const changePicker = (event) => {
    setValue(event.target.value);
  };
 

  const addTask = () => {
    props.setTask([...props.task, value]);
  };
  return (
    <div className="add-task-container">
      <input
        onChange={changePicker}
        className="add-task-items"
        type="text"
        placeholder="[Please Enter Your TODO Task]"
      />
      <button onClick={addTask} className="">
        Add Task
      </button>
    </div>
  );
}
export default AddTask;
