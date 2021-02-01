import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import axios from "axios";

const url = "https://restcountries.eu/rest/v2/all";

const Searcher = () => {
    const [countryQuery, setCountryQuery] = useState("");
    const [countries, setCountries] = useState([]);
    const [countriesToDisplay, setCountriesToDisplay] = useState([]);

    const filteredCountries = countries.filter((country) => {
        return country.name.toLowerCase().includes(countryQuery.toLowerCase());
    });

    const handleOnChange = (event) => {
        event.preventDefault();
        setCountryQuery(event.target.value);
    };

    useEffect(() => {
        axios
            .get(url)
            .then((countries) => {
                setCountries(countries.data);
                setCountriesToDisplay(countries.data);
            })
            .catch((error) => {
                throw error;
            });
    }, []);

    useEffect(() => {
        setCountriesToDisplay(filteredCountries);
    }, [countryQuery]);

    return (
        <>
            <form>
                find country{" "}
                <input
                    type="text"
                    value={countryQuery}
                    onChange={handleOnChange}
                ></input>
            </form>
            <Countries props={{ countries: countriesToDisplay }} />
        </>
    );
};

export default Searcher;
