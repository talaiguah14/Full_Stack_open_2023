import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Total from "../total/Total"


const Course = ({course}) => {
    const parts = course.parts
    return (
        <div>
        <Header course = {course}/>
        <Content parts = {parts}/>
        <Total parts = {parts}/>
        </div>
        
    );
}

export default Course   