import React from "react";
import {CardComponent} from "../CardComponent/CardComponent";
import "./ListComponent.scss";

export const ListComponent = React.memo(({elements}) => {
  const objects = elements;

  console.log(objects);
  return (
    <>
      <div className="list">
        {objects !== undefined &&
          objects.map((o) => <CardComponent element={o} key={o._id} />)}
      </div>
    </>
  );
});
