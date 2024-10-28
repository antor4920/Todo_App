import React, { useState } from "react";

import Style from "./ParticulerTask.module.css";

const NewTodos = (props) => {
  const [newTask, setnewTask] = useState("");

  const SaveTask = (event) => {
    event.preventDefault();
    props.TakeTask(newTask);
  };

  return (
    <div className={Style.newtoddiv}>
      <form onSubmit={SaveTask}>
        <div className={Style.Inputfield}>
          <label>Task: </label>
          <input
            type="Text"
            onChange={(event) => {
              setnewTask(event.target.value);
            }}
          />
        </div>
        <div className={Style.Inputfield}>
          <label>Discription: </label>
          <input type="Text" />
        </div>
        <button type="submit" className={Style.add_task}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTodos;
