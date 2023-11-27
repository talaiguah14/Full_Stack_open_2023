import React from "react";
import Input from "../../atoms/input/Input";
const Filter = ({ ...props }) => {
  return (
    <div>
      filter show with :
      <Input {...props} />
    </div>
  );
};

export default Filter;
