import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";

const Countries = ({ props }) => {
    const { countries } = props;
    const [countriesToShowInfo, setCountriesToShowInfo] = useState([]);
    const countriesIndexes = [...Array(countries.length)].map((item) => false);

    const handleClickShow = (countryIndex) => {
        const changedArray = [...countriesToShowInfo];
        changedArray[countryIndex] = true;
        setCountriesToShowInfo(changedArray);
    };

    useEffect(() => {
        setCountriesToShowInfo(countriesIndexes);
    }, [countries]);

    const showCountryInformation = (country) => {
        return (
            <>
                <CountryInfo country={country} />
            </>
        );
    };

    if (countries.length === 1) {
        const country = countries[0];
        return <>{showCountryInformation(country)}</>;
    }

    if (countries.length > 10) {
        return (
            <>
                <p>Too many matches, specify another filter</p>
            </>
        );
    }


    // If the query returns 1 < countries < 10
    
    return (
        <>
            {countries.map((country) => {
                return (
                    <div className="Country" key={country.name + "Div"}>
                        {countriesToShowInfo[countries.indexOf(country)] ===
                        false ? (
                            <>
                                <h2 key={country.name}>{country.name}</h2>
                                <button
                                    key={country.name + "Button"}
                                    onClick={() => {
                                        handleClickShow(
                                            countries.indexOf(country)
                                        );
                                    }}
                                >
                                    Show
                                </button>
                            </>
                        ) : (
                            showCountryInformation(country)
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default Countries;
