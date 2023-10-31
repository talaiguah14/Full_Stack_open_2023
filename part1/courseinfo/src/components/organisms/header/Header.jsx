import React from "react";

const Header = (props)=>{
    const {course} = props
    return (
        <header>
            <h1>{course}</h1>
        </header>
    );
};

export default Header;