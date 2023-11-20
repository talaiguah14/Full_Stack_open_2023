import React from "react";
import Header from "../header/Header";
import Content from "../content/Content"


const Course = ({course}) => {
    const parts = course.parts
    return (
        <div>
        <Header course = {course}/>
        <Content parts = {parts}/>
        </div>
        
    );
}

export default Course   