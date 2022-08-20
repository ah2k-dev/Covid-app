import React, { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      setCountries(data.Countries);
      console.log(data.Countries);
    };
    getData();
  }, []);
  if (!countries) {
    return <div>Loading...</div>;
  }
  return <div className="GlobalContainer">
    {
        countries.map((value, index)=>{
            delete value.Premium;
            delete value.ID
            return <CountriesBox value={value} key={index} />
        })
    }
  </div>;
};

export default Countries;

const CountriesBox = (props) => {
    return (
    <div className="CountriesBox">
        <h3>{props.value.Country}</h3>
        {
            Object.keys(props.value).map((val, ind)=>{
                return <div className="CountryValues">
                    <span>{val} :</span>
                    <span>{props.value[val]}</span>
                </div>
            })
        }
    </div>
    )
}
