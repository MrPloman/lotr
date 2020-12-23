import React from "react";
import "./CardComponent.scss";

export const CardComponent = ({element}) => {
  return (
    <div className="card">
      <h5>{element.race}</h5>
    </div>
  );
};
