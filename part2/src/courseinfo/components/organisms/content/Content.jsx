import React from "react";
import Part from "../../atoms/part/Part";

const Content = (props) => {
  const {name,value,id} = props

  return (
        <Part key={id} name={name} value={value} />
  );
};

export default Content;
