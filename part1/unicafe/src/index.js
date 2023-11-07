import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/organisms/header/Header";
import Button from "./components/atoms/button/button";
import Statistics from "./components/atoms/statistics/statistics";


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let intAll = 0;
  let doubleAverage = 0;
  let doublePositive = 0

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
  };

  intAll =  good + neutral + bad ;
  var auxAverage = (good - bad) / intAll;
  doubleAverage = auxAverage > 0 ? auxAverage : 0;
  var auxPositive = (good / intAll) * 100;
  doublePositive = auxPositive > 0 ? auxPositive : 0

  return (
    <div>
      <Header textName={"Give Feedback"} />
      <Button text={"Good"} handleClick={increaseGood} />
      <Button text={"Neutral"} handleClick={increaseNeutral} />
      <Button text={"Bad"} handleClick={increaseBad} />
      <Statistics good = {good} neutral = {neutral} bad = {bad} intAll = {intAll} doubleAverage = {doubleAverage} doublePositive = {doublePositive} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
