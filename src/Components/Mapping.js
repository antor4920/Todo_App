import React from "react";
import Particuler_Mapping from "./Particuler_Mapping";

const Mapping = (props) => {
  return (
    <div>
      {props.onMapping.map((x, index) => (
        <Particuler_Mapping key={index} ParticulerTask={x} />
      ))}
    </div>
  );
};

export default Mapping;
