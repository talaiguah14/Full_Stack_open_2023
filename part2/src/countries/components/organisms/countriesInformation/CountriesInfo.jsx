import React from "react";
import ContryInformation from "../countryInformation/CountryInformation";

const CountriesInformation = (props) => {
  const { countryFind } = props;
  const count = countryFind.length;
  if (count > 10) {
    return <p>To manu matches, specify abother filter</p>;
  } else if (count > 1 && count < 10) {
    return (
      <ul>
        {countryFind.map((country) => (
          <li key={country.cca2 + country.ccn3}>{country.name.common}</li>
        ))}
      </ul>
    );
  } else if (count === 1){
    return ( <ul>
        <ContryInformation countries={countryFind}/>
    </ul>
    );
  }
};

export default CountriesInformation;
