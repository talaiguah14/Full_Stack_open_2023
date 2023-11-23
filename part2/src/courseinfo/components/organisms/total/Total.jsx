import React from "react";

const Total = ({...props})=>{
    return (
        <h4>
            {props.children}
        </h4>
    );
};
export default Total;