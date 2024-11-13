import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Mapping from "./Mapping";
import NewTodos from "./NewTodos";
import Style from "./ParticulerTask.module.css";

// const list_of_task = [
//   {
//     id: 1,
//     Task: "Study",
//     desc: "study at 7am",
//   },
//   {
//     id: 2,
//     Task: "Work Out",
//     desc: "study at 9am",
//   },
// ];

const Home = () => {
  const [listofTask, setlistofTask] = useState([]);

  const TaskAdding = (event) => {
    setlistofTask((oldtask) => {
      return [...oldtask, { id: uuidv4(), event }];
    });
  };
  // console.log(listofTask);
  const handledelete = (ID) => {
    const AfterDelete = listofTask.filter((D) => D.id !== ID);
    setlistofTask(AfterDelete);
  };

  return (
    <div className={Style.Homediv}>
      <h1>TODO APP</h1>
      <NewTodos TaskAdding={TaskAdding} />
      <Mapping onMapping={listofTask} Handledelete={handledelete} />
    </div>
  );
};

export default Home;
