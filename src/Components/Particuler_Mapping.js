import React from "react";
import Style from "./ParticulerTask.module.css";

const Particuler_Mapping = (props) => {
  return (
    <div className={Style.TaskandDesc}>
      <h3>{props.ParticulerTask.Task}</h3>
      <p>{props.ParticulerTask.desc}</p>
    </div>
  );
};

export default Particuler_Mapping;
