import React from "react";

const Total = ({parts})=>{
    return (
        <h4>
            Total of: {
                parts.reduce(
                    (a,b)=>a + b.exercises,
                    0,)} exercises
        </h4>
    );
};

export default Total;