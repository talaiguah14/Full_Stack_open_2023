import React from "react";
import H3 from "../h3/h3";

const Statistics = (props) => {
  const {good,neutral,bad,doubleAverage,doublePositive,intAll} = props
  return (
    <article>
      <H3>Statistics</H3>
      <H3>Good {good}</H3>
      <H3>Neutral {neutral}</H3>
      <H3>Bad {bad}</H3>
      <H3> All {intAll}</H3>
      <H3>average {doubleAverage}</H3>
      <H3>positive {doublePositive}%</H3>
    </article>
  );
};

export default Statistics;
