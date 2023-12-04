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
        <Input value={newName} onChange={handleNewNameChange} />
      </div>
      <div>
        number:
        <Input value={newNumber} onChange={handlenewNumberChange} />
      </div>
      <Button type="submit" text={"Add"}/>
    </form>
  );
};

export default PersonForm;
