import React, { useState,useEffect } from "react";
import axios from 'axios'
import Filter from "./components/organisms/filter/Filter";
import PersonForm from "./components/organisms/personForm/PersonForm";
import Persons from "./components/organisms/person/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPersons, setFilterPersons] = useState("");

  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data);
    })
  },[])


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
