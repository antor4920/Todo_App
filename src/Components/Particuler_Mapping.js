import React from "react";
import Style from "./ParticulerTask.module.css";

const Particuler_Mapping = (props) => {
  const Deleteitem = (ID) => {
    props.Delete(ID);
  };

  return (
    <div className={Style.TaskandDesc}>
      <div>
        <h3>{props.ParticulerTask.Task}</h3>
        <p>{props.ParticulerTask.desc}</p>
      </div>
      <button
        className={Style.dlt_btn}
        onClick={() => {
          Deleteitem(props.TaskID);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Particuler_Mapping;
