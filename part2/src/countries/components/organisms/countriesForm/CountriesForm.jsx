import React from "react";
import Filter from "../filter/Filter";

const CountriesForm = (props)=>{
    const {filterCountries,handleFilterCountries} = props
    return (
        <div>
            <Filter value={filterCountries} onChange={handleFilterCountries}/>
        </div>
    );
};

export default CountriesForm;