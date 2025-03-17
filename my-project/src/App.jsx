// Import necessary modules
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./index.css"; // Ensure Tailwind CSS is configured

const App = () => {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);
  // state to store the error state
  const [error, setError] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    const API_KEY = "6431edce50eb6d01e44be0d98469d8cd"; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      {/* Home page with props for searBar */}
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {/* WeatherCard component with weatherData as prop */}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App; // Export the App component for use in main entry file.
