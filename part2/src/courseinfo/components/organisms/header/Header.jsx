import React from "react";

const Header = (props)=>{
    const {course} = props
    console.log(course)
    return (
            <h1>{course.name}</h1>
    );
};

export default Header;