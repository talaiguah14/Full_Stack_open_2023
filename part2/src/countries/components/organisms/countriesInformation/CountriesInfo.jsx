import React from "react";
import ContryInformation from "../countryInformation/CountryInformation";

import ShowCountry from "../showCountry/ShowCountry";

const CountriesInformation = (props) => {
  const { countryFind,filterCountries } = props;
  const count = countryFind.length;
  if (count > 10) {
    return <p>To manu matches, specify abother filter</p>;
  } else if (count > 1 && count < 10) {
    return (
      <ul>
        {countryFind.map((country) => (
          <ShowCountry key={country.name.common} country={country} />
        ))}
      </ul>
    );
  } else if (count === 1){
    const select = countryFind.find((element) => element.name.common.toLowerCase() === filterCountries.toLowerCase())
    return ( <ul>
        <ContryInformation country={select}/>
    </ul>
    );
  }
};

export default CountriesInformation;
