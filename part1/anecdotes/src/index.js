import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/atoms/button/button';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Uint8Array(props.anecdotes.length));

  const isSelected = () =>{
    
    setSelected(getRandom)
  };

  const setToVote = ()=>{
    const auxVote = {...vote};
    auxVote[selected] += 1;
    setVote(auxVote);
    console.log(auxVote[selected]);
    console.log(auxVote);
  };

  const getRandom = () => {
    let auxRandom = Math.floor(Math.random() * props.anecdotes.length);
    if(auxRandom === selected){
      auxRandom = Math.floor(Math.random() * props.anecdotes.length)
    };
    return auxRandom;
  };

  console.log("Aux " + selected);
  
  
 

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {vote[selected]} votes</p>
      <Button text={"Vote"} handleClick={setToVote}/>
      <Button text={"Next anecdote"} handleClick={isSelected}/>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
) 