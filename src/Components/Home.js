import React, { useState } from "react";
import Mapping from "./Mapping";
import NewTodos from "./NewTodos";
import Style from "./ParticulerTask.module.css";

const list_of_task = [
  {
    id: 1,
    Task: "Study",
    desc: "study at 7am",
  },
  {
    id: 2,
    Task: "Work Out",
    desc: "study at 9am",
  },
];

const Home = () => {
  const [listofTask, setlistofTask] = useState(list_of_task);

  const TaskAdding = (event) => {
    setlistofTask([...listofTask, event]);
  };

  return (
    <div className={Style.Homediv}>
      <h1>TODO APP</h1>
      <NewTodos TaskAdding={TaskAdding} />
      <Mapping onMapping={listofTask} />
    </div>
  );
};

export default Home;
