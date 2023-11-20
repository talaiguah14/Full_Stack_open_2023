import React from "react";
import Part from "../../atoms/part/Part";

const Content = ({ parts }) => {
  return (
    <article>
      {parts.map(parts => (
        <Part key={parts.id} name={parts.name} value={parts.exercises} />
      ))}
    </article>
  );
};

export default Content;
