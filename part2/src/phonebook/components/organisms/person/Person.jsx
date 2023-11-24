import React from "react";

const Persons = ({ persons, personToShow }) => {
  return (
    <div>
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
