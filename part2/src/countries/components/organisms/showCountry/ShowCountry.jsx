import React, {useState} from "react";
import Button from "../../atoms/button/Button";
import ContryInformation from "../countryInformation/CountryInformation";

const ShowCountry = (props) => {
  const [showCountrySelect, setShowCountrySelect] = useState(false);

    const handlebutton = () => {
      setShowCountrySelect(!showCountrySelect);
      }
  return (
    <div>
      {props.country.name.common}
      <Button handleClick={handlebutton} text={showCountrySelect ? "Hide info" : "Show info"}/>
      {showCountrySelect && <ContryInformation country={props.country}/>}
    </div>
  );
};

export default ShowCountry;

