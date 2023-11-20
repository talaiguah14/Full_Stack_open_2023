import React from "react";

const Part = (props) => {
  const { name, value} = props;
  return (
    <p >
      {name} {value}
    </p>
  );
};

export default Part;
