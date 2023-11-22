import React from "react";

const Total = ({...props})=>{
    console.log("Total:",props)
    return (
        <h4>
            {props.children}
        </h4>
    );
};
export default Total;