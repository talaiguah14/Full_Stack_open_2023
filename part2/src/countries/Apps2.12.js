import React, { useState,useEffect } from "react";
import axios from 'axios';
import CountriesForm from "./components/organisms/countriesForm/CountriesForm";
import CountriesInformation from "./components/organisms/countriesInformation/CountriesInfo";




const App = () => {
    const [countries, setCountries] = useState([]);
    const [filterCountries, setFilterCountries] = useState("");

    useEffect(()=>{
        axios
        .get("https://restcountries.com/v3.1/all")
        .then(response=>{
            setCountries(response.data)
        })
    },[]);

    const handleFilterCountries = (event) => {
        setFilterCountries(event.target.value);
      };

      const countryFind = countries.filter(country =>
        country.name.common.toLowerCase().includes(filterCountries.toLowerCase())
    );
    
    return(
        <div>
            <h1>Countries</h1>
            <CountriesForm filterCountries={filterCountries} handleFilterCountries={handleFilterCountries}/>
            <CountriesInformation countryFind={countryFind}/>
        </div>
    );
};


export default App;