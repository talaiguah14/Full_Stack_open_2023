import React from "react";
import Img from "../../atoms/img/Img";

const ContryInformation = ({ country }) => {
  if (country !== undefined) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>languages</h3>
        <ul>
            {Object.values(country.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
        </ul>
        <Img src={country.flags.svg} alt={country.flags.alt} width="150px"/>
      </div>
    );
  }
};

export default ContryInformation;
