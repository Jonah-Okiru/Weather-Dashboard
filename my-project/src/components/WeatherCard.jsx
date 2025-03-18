// WeatherCard Component
// This component displays the fetched weather data
import React from "react"; // Import React 
// WeatherCard function
const WeatherCard = ({ data, onRefresh }) => {
  return (
    
    <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
      {/*The card header displaying the name of the city and country code  */}
      <h2 className="text-2xl font-bold">{data.name}, {data.sys.country}</h2>
      {/* The Temperature of the city */}
      <p className="text-lg">Temperature: {data.main.temp}°C</p>
      {/* The humidity of the city */}
      <p className="text-lg">Humidity: {data.main.humidity}%</p>
      {/* The wind speed of the city */}
      <p className="text-lg">Wind Speed: {data.wind.speed} km/h</p>
      {/* weather Condition icon */}
      <img
         src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
         alt={data.weather[0].description}
      />
      {/* Description of the weather condition */}
      <p className="text-lg capitalize">{data.weather[0].description}</p>
      {/* Refresh button */}
      <button
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700"
        onClick={onRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default WeatherCard; // Export the Weathercard component.