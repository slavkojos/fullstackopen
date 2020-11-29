import React from "react";

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {}
        {props.part.parts[0].exercises +
          props.part.parts[1].exercises +
          props.part.parts[2].exercises}
      </p>
    </div>
  );
};

export default Total;
