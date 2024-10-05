import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "8ALPF8V2SV24QB2VYMD4MR3AR";

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 15);

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
        // If date is not a valid Date object, return an empty string or handle it differently
        return "Invalid Date";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };
  
  const fromDate = formatDate(today);
  const toDate = formatDate(futureDate);

  const fetchWeather = (city) => {
    setLoading(true);
    setError(null);
    setCity(city);

    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}
        ?unitGroup=metric&include=days%2Ccurrent%2Chours/${fromDate}/${toDate}&key=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("City not found or error fetching data");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const closeHandler = () =>{
    setError(null);
  }

  return (
    <div className="weather-info">
      <div className="topbar">
        <SearchBar onSearch={fetchWeather} />
      </div>

      {/* Show loading message while fetching */}
      {loading && 
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      }

      {/* Show error message if there is an error */}
      {error && 
        <div className="error-window">
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={closeHandler}>Close</button>
        </div>
      }

      {/* Show weather data only if it's available and not loading */}
      {!loading && weatherData && <Weather data={weatherData} />}
      <Footer/>
    </div>
  );
}

export default App;
