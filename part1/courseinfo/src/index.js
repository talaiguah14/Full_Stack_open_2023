import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/organisms/header/Header';
import Content from './components/organisms/content/Conten';
import Total from './components/organisms/total/Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))