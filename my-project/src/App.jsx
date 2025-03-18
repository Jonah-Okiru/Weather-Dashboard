// Import necessary modules
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./index.css"; // Ensure Tailwind CSS is configured

const App = () => {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);
  // state to store the error state
  const [error, setError] = useState(null);
  // State to store the city name for the automatic update
  const [city, setCity] = useState("");
  // State to store recent searches
  const [recentSearches, setRecentSearches] = useState([]);
  // Load recent searches from local storage on mount
  useEffect(() =>{
    const savedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);
  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    const API_KEY = "6431edce50eb6d01e44be0d98469d8cd"; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("City not found or invalid API responses");
      }
      const data = await response.json();
      console.log("API Response:", data); // Debugging output
      if (!data || typeof data !== "object" || !data.main || !data.weather || !data.sys || !data.wind) {
        throw new Error("Un expected API response formart");
      }
      setWeatherData(data);
      setError(null);
      setCity(cityName);
      // update recent searches
      const updatedSearches = [cityName, ...recentSearches.filter(item => item !== cityName)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    } catch (err) {
      if (err.message.includes("Failed to fetch")) {
        setError("Network Error. Please check your internet connection.");
      } else {
        setError(err.message)
      }
      setWeatherData(null);
    }
  };
  // Autorefresh the weather data every 5 minutes.
  useEffect(() => {
  if (city) {
    const interval = setInterval(() =>{
      fetchWeather(city);
    }, 300000); // 300,000 = 5 minutes
    return () => clearInterval(interval);
  }
  }, [city]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      {/* Home page with props for searBar */}
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {/* WeatherCard component with weatherData as prop */}
      {weatherData && <WeatherCard data={weatherData} onRefresh={() => fetchWeather(city)} />}
    </div>
  );
};

export default App; // Export the App component for use in main entry file.
