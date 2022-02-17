import React, { useEffect, useState } from "react";

import Weather from "./components/Weather";
import SearchLocation from "./components/SearchLocation";
import "./App.css";

export default function App() {
  const [data, setData] = useState(null);
  const [load, setload] = useState(true);
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchWeatherByLatLan();
  }, []);

  const fetchWeatherByLatLan = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const URL = `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
      await fetch(URL)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "404") {
            setErrorMsg(result.message);
          } else {
            setData(result);
            setLocation(result.name);
          }
          setload(false);
        });
    });
  };

  const fetchWeatherByLocation = async () => {
    setload(true);
    setErrorMsg(""); // clear error before calling the API
    const URL = `${process.env.REACT_APP_API_URL}/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`;
    await fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") {
          setErrorMsg(result.message); // Set error mesaage
        } else {
          setData(result);
        }
        setload(false);
      })
      .catch((error) => console.log("error", error.message));
  };

  const handleOnChange = (e) => {
    setLocation(e.target.value);
  };

  const searchWeather = (e) => {
    fetchWeatherByLocation();
  };

  if (load) {
    return <p>"Loading weather please wait...."</p>;
  }

  return (
    <div className="App">
      <div className="search-container">
        {/* <h2>Weather App</h2> */}
        <SearchLocation
        value="WeatherApp"
          place={location}
          onChange={handleOnChange}
          onSearch={searchWeather}
        />
      </div>
      {data && !errorMsg ? (
        <Weather weatherData={data} />
      ) : (
        <p className="error-msg">Something went wrong! {errorMsg}</p>
      )}
    </div>
  );
}
