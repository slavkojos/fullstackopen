import React from "react";

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part.parts[0].name} {props.part.parts[0].exercises}
      </p>
      <p>
        {props.part.parts[1].name} {props.part.parts[1].exercises}
      </p>
      <p>
        {props.part.parts[2].name} {props.part.parts[2].exercises}
      </p>
    </div>
  );
};

export default Content;
