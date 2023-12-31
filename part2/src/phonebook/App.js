import React, { useState, useEffect } from "react";
import Filter from "./components/organisms/filter/Filter";
import PersonForm from "./components/organisms/personForm/PersonForm";
import Persons from "./components/organisms/person/Person";
import PhonebookService from "../../src/services/phonebookService";
import Notification from "./components/atoms/notification/notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPersons, setFilterPersons] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState(null);

  useEffect(() => {
    PhonebookService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

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
      name: newName,
      phoneNumber: parseInt(newNumber),
    };

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingPerson) {
      const confirm = window.confirm(
        `${existingPerson.name} is alredy added to phonebook, replacethe old number with a new one?`
      );
      if (confirm) {
        PhonebookService.updatePerson(existingPerson.id, personObject)
          .then((response) => {
            if (response.status === 200) {
              setPersons(
                persons.map((person) =>
                  person.id !== existingPerson.id ? person : response.data
                )
              );
              setNewName("");
              setNewNumber("");
            } else if (response.status === 400) {
              setErrorMessage(response.data.error.message);
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
            }
          })
          .catch((error) => {
            console.log("Error catch", error.response);
          });
      }
    } else {
      PhonebookService.createPerson(personObject)
        .then((response) => {
          if (response.status === 201) {
            console.log("PhonebookService.createPerson", response);
            const returnedPerson = response.data;
            setPersons(persons.concat(returnedPerson));
            setNewName("");
            setNewNumber("");
            if (response.status === 201 && returnedPerson.id !== null) {
              setConfirmMessage(`Added ${returnedPerson.name}`);
              setTimeout(() => {
                setConfirmMessage(null);
              }, 5000);
            }
          } else if (response.status === 400) {
            setErrorMessage(response.data.error.message);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          }
        })
        .catch((error) => {
          console.log("Error catch", error.response);
        });
    }
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={confirmMessage} className={"confirm"} />
      <Notification message={errorMessage} className={"error"} />
      <Filter
        name={"txtFilter"}
        value={filterPersons}
        onChange={handlenewFilterPersons}
      />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handlenewNumberChange={handlenewNumberChange}
      />
      <Persons
        persons={persons}
        personToShow={personToShow}
        setPersons={setPersons}
      />
      <div>{`debug: ${newName} ${newNumber}`}</div>
    </div>
  );
};

export default App;
