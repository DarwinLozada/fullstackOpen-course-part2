import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "http://api.weatherstack.com/current";

const CountryWeather = ({ country }) => {
    const [countryWeather, setCountryWeather] = useState(false);

    useEffect(() => {
        const params = {
            access_key: "fa72d0072e18c585681283d25715a2bc",
            query: country.capital,
            units: "m",
        };

        axios
            .get(url, { params })
            .then((response) => {
                setCountryWeather(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(countryWeather);

    return (
        <>
            {countryWeather.current ? (
                <>
                    <h2>Weather in {`${country.capital}`}</h2>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <h3>Tempeature</h3>
                        <p>{`${countryWeather.current.temperature} Celsius degrees`}</p>
                    </div>
                    <img
                        src={countryWeather.current.weather_icons[0]}
                        alt="weather_icon"
                    ></img>
                    <div>
                        <h3>Wind:</h3>
                        <p>{`${countryWeather.current.wind_speed} Km/h, direction ${countryWeather.current.wind_dir}`}</p>
                    </div>
                </>
            ) : (
                false
            )}
        </>
    );
};

export default CountryWeather;
