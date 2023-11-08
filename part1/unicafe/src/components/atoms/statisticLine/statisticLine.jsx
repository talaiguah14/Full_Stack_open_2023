import React from "react";
import H3 from "../h3/h3";

const StatisticLine = (props) =>{
    const {text, value} = props
    return (
        <H3>{text} {value}</H3>
    );
};

export default StatisticLine;