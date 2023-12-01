import React from "react";
import phonebookService from "../../../../services/phonebookService";
import Button from "../../atoms/button/Button";

const Persons = ({ persons, personToShow, setPersons }) => {
  const deletePersos = (person) => {
    const confirm = window.confirm(`Delete ${person.name}?`);
    if (confirm) {
      phonebookService
        .deletePerson(person.id)
        .then((response) => {
          setPersons(persons.filter((p) => p.id !== person.id));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };
  return (
    <div>
      <h2>All phonebook</h2>
      <ul>
        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              {`${person.name} ${person.number}`}
              <Button
                handleClick={() => deletePersos(person)}
                text={"Delete"}
              />
            </li>
          ))}
        </ul>
      </ul>
      <h2>Filter phonebook</h2>
      <ul>
        <ul>
          {personToShow.map((onePerson) => (
            <li
              key={onePerson.id}
            >{`${onePerson.name} ${onePerson.number}`}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Persons;
