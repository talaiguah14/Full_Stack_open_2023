import React from "react";

const Header = (props)=>{
    const {textName} = props
    return (
        <header>
            <h1>{textName}</h1>
        </header>
    );
};

export default Header;