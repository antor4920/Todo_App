import React from "react";
import Particuler_Mapping from "./Particuler_Mapping";
import Style from "./ParticulerTask.module.css";

const Mapping = (props) => {
  return (
    <div className={Style.Mappingdiv}>
      {props.onMapping.map((x) => (
        <Particuler_Mapping key={x.id} ParticulerTask={x.event} />
      ))}
    </div>
  );
};

export default Mapping;
