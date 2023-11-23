import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPersons, setFilterPersons] = useState("");

  const personToShow = filterPersons
    ? persons.filter((person) => person.name.toLowerCase().includes(filterPersons.toLowerCase()))
    : [];

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handlenewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handlenewFilterPersons = (event) => {
    setFilterPersons(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    const validatePerson = persons.map((person) => person.name);
    if (validatePerson.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with :
        <input value={filterPersons} onChange={handlenewFilterPersons} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlenewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>All phonebook</h2>
      <ul>
        <ul>
          {persons.map((person) => (
            <li key={person.id}>{`${person.name} ${person.number}`}</li>
          ))}
        </ul>
      </ul>
      <h2>Filter phonebook</h2>
      <ul>
        <ul>
          {personToShow.map((onePerson) => (
            <li key={onePerson.id}>{`${onePerson.name} ${onePerson.number}`}</li>
          ))}
        </ul>
      </ul>
      <div>{`debug: ${newName} ${newNumber}`}</div>
    </div>
  );
};

export default App;
