import React, { useState } from "react";
import Mapping from "./Mapping";
import NewTodos from "./NewTodos";

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
  // const [TaskName, setTaskName] = useState(list_of_task);

  // const TakeTask = (newTask) => {
  //   setTaskName([...TaskName, newTask]);
  // };

  return (
    <div>
      {/* <NewTodos TakeTask={TakeTask} /> */}
      <Mapping onMapping={list_of_task} />
    </div>
  );
};

export default Home;
