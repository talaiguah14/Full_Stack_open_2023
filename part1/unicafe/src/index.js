import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/organisms/header/Header";
import Button from "./components/atoms/button/button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  console.log("good", good);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    console.log("neutral ", neutral);
  };
  const increaseBad = () => {
    setBad(bad + 1);
    console.log("bad ");
  };
  return (
    <div>
      <Header textName={"Give Feedback"} />
      <Button text={"Good"} handleClick={increaseGood} />
      <Button text={"Neutral"} handleClick={increaseNeutral} />
      <Button text={"Bad"} handleClick={increaseBad} />
      <h2>Statistics</h2>
      <h3>HOla {good}</h3>
      <h3>HOla2 {neutral}</h3>
      <h3>HOla3 {bad}</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
