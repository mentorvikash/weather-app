import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("canada");
  const [wetherData, setWetherData] = useState(null);
  const [error, setError] = useState("");

  const getTodayWetherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((data) => {
        setWetherData(data);
        setError("");
      })
      .catch((error) => {
        setWetherData(null);
        setError(error.message);
      });
    // dummy data if wether api not working
    // const data = {
    //   coord: {
    //     lon: -0.8141,
    //     lat: 38.6767,
    //   },
    //   weather: [
    //     {
    //       id: 804,
    //       main: "Clouds",
    //       description: "overcast clouds",
    //       icon: "04n",
    //     },
    //   ],
    //   base: "stations",
    //   main: {
    //     temp: 282.27,
    //     feels_like: 280.09,
    //     temp_min: 281.7,
    //     temp_max: 282.93,
    //     pressure: 1018,
    //     humidity: 70,
    //     sea_level: 1018,
    //     grnd_level: 952,
    //   },
    //   visibility: 10000,
    //   wind: {
    //     speed: 3.95,
    //     deg: 263,
    //     gust: 7.59,
    //   },
    //   clouds: {
    //     all: 100,
    //   },
    //   dt: 1704910293,
    //   sys: {
    //     type: 2,
    //     id: 2085591,
    //     country: "ES",
    //     sunrise: 1704871265,
    //     sunset: 1704905970,
    //   },
    //   timezone: 3600,
    //   id: 6355428,
    //   name: "Cañada",
    //   cod: 200,
    // };
    // setError("");
    // setWetherData(data);
  };

  console.log({ wetherData, error });

  return (
    <div>
      <h4>Weather App</h4>
      <input
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button onClick={getTodayWetherData}>Get Data</button>
      {wetherData && (
        <div>
          <h2>
            {wetherData?.name}, {wetherData?.sys?.country}
          </h2>
          <p>{wetherData?.weather[0]?.description}</p>
          <p>Temperature: {wetherData.wind.speed} </p>
          <p>Feels Like: {wetherData.main.feels_like} </p>
          <p>Min Temperature: {wetherData.main.temp_max}</p>
          <p>Max Temperature: {wetherData.main.temp_min}</p>
          <p>Humidity: {wetherData.main.humidity}</p>
          <p>Pressure: {wetherData.main.pressure}</p>
          <p>Wind Speed: {wetherData.wind.speed} </p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Weather;
