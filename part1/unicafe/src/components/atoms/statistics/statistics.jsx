import React from "react";
import H3 from "../h3/h3";
import StatisticLine from "../statisticLine/statisticLine";

const Statistics = (props) => {
  const { good, neutral, bad, doubleAverage, doublePositive, intAll } = props;
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text={"Good"} />
            </td>
            <td>
              <StatisticLine value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"Neutral"} />
            </td>
            <td>
              <StatisticLine value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"Bad"} />
            </td>
            <td>
              <StatisticLine value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"All"} />
            </td>
            <td>
              <StatisticLine value={intAll} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"average"} />
            </td>
            <td>
              <StatisticLine value={doubleAverage} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={"positive"} />
            </td>
            <td>
              <StatisticLine value={doublePositive + "%"} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <article>
        <H3>No feedback given</H3>
      </article>
    );
  }
};

export default Statistics;
