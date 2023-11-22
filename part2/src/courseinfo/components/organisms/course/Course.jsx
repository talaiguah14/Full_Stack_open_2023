import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Total from "../total/Total";

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Header key={course.id} name={course.name} />
          {course.parts.map((part) => (
              <Content key={part.id} name={part.name} value={part.exercises} />
          ))}
          <Total>
          {`Total of ${course.parts.reduce((a, b) => a + b.exercises, 0)} exercises`}
          </Total>
        </div>
      ))}
    </div>
  );
};

export default Course;
