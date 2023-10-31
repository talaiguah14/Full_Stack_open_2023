import React from "react";
import Part from "../../atoms/part/Part";

const Content = (props) => {
  const {course} = props
  return (
    <article>
      <Part name={course.parts[0].name} value={course.parts[0].exercises}/>
      <Part name={course.parts[1].name} value={course.parts[1].exercises}/>
      <Part name={course.parts[2].name} value={course.parts[2].exercises}/>
    </article>
  );
};

export default Content;
