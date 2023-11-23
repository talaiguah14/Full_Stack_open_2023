import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',id:1}
  ]) ;
  const [ newName, setNewName ] = useState('');

  const handleNewNameChange = (event) =>{
    setNewName(event.target.value);
  };

  const addPerson = (event)=>{
    event.preventDefault();
    const personObject = {
        name:newName,
        id:persons.length + 1 
    };
    setPersons(persons.concat(personObject));
    setNewName('');
  };
  console.log('persons',persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <ul>
          {persons.map(person => 
          <li key={person.id}>{person.name}</li>
          )}
        </ul>
        </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App