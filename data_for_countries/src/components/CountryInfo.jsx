import React, { useEffect, useState } from "react";
import CountryWeather from "./CountryWeather";
import axios from "axios";

const CountryInfo = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {` ${country.capital}`}</p>
            <p>Population: {` ${country.population}`}</p>
            <h2>Languages</h2>
            <ul>
                {country.languages.map((language) => {
                    return <li key={language.name}>{language.name}</li>;
                })}
            </ul>
            <img
                className="country-flag"
                src={country.flag}
                alt={`${country} flag`}
            ></img>
            <CountryWeather country={country} />
        </div>
    );
};

export default CountryInfo;
