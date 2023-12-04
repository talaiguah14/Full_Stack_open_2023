import React from "react";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

const PersonForm = (props) => {
  const {
    addPerson,
    newName,
    handleNewNameChange,
    newNumber,
    handlenewNumberChange,
  } = props;
  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <Input name={"txtNewNombre"} value={newName} onChange={handleNewNameChange} />
      </div>
      <div>
        number:
        <Input name={"txtNewNumber"} value={newNumber} onChange={handlenewNumberChange} />
      </div>
      <Button type="submit" text={"Add"}/>
    </form>
  );
};

export default PersonForm;
