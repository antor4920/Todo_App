import React, { useState } from "react";

const NewTodos = (props) => {
  const [newTask, setnewTask] = useState("");
  // const [newDis, setnewDis] = useState("");

  const SaveTask = (event) => {
    event.preventDefault();
    props.TakeTask(newTask);
  };

  return (
    <div>
      <form onSubmit={SaveTask}>
        <div>
          <label>Task: </label>
          <input
            type="Text"
            onChange={(event) => {
              setnewTask(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Discription: </label>
          <input
            type="Text"
            // onChange={(event) => {
            //   setnewDis(event.target.value);
            // }}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default NewTodos;
