import React, { useState } from "react";
import Filter from "./components/organisms/filter/Filter";
import PersonForm from "./components/organisms/personForm/PersonForm";
import Persons from "./components/organisms/person/Person";

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
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterPersons.toLowerCase())
      )
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

    const validatePerson = persons.map((person) => person.name.toLowerCase());
    if (validatePerson.includes(newName.toLowerCase())) {
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
      <Filter value={filterPersons} onChange={handlenewFilterPersons} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handlenewNumberChange={handlenewNumberChange}
      />
      <Persons persons={persons} personToShow={personToShow} />
      <div>{`debug: ${newName} ${newNumber}`}</div>
    </div>
  );
};

export default App;
