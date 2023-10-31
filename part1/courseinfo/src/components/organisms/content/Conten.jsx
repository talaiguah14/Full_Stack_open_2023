import React from "react";
import Part from "../../atoms/part/Part";

const Content = (props) => {
  const { parts} = props;
  return (
    <article>
      <Part name={parts[0].name} value={parts[0].exercises}/>
      <Part name={parts[1].name} value={parts[1].exercises}/>
      <Part name={parts[2].name} value={parts[2].exercises}/>
    </article>
  );
};

export default Content;
