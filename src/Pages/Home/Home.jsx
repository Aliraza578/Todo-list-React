import React from "react";
import { useState } from "react";
import "./Home.css";
import Tasklist from "../../components/Tasklist/Tasklist";
import AddTask from "../../components/AddTask/Addtask";

function Home() {
  const [task, setTask] = useState([]);

    return (
      <div>
      <AddTask task = {task} setTask ={setTask}/>
      <Tasklist task = {task} setTask ={setTask}/>
      </div>
      
    )
  }
  export default Home;