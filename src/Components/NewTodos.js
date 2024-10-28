import React, { useState } from "react";

import Style from "./ParticulerTask.module.css";

const NewTodos = (props) => {
  const [newTask, setnewTask] = useState({ Task: "", desc: "" });

  const { Task, desc } = newTask;

  const handleChange = (event) => {
    const name = event.target.name;
    setnewTask((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const SaveTask = (event) => {
    event.preventDefault();
    props.TaskAdding(newTask);
  };

  return (
    <div className={Style.newtoddiv}>
      <form onSubmit={SaveTask}>
        <div className={Style.Inputfield}>
          <label>Task: </label>
          <input type="Text" name="Task" value={Task} onChange={handleChange} />
        </div>
        <div className={Style.Inputfield}>
          <label>Discription: </label>
          <textarea
            type="Text"
            value={desc}
            name="desc"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={Style.add_task}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTodos;
