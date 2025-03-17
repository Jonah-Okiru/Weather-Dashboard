// WeatherCard Component
// This component displays the fetched weather data
import React from "react"; // Import React 
// WeatherCard function
const WeatherCard = ({ data }) => {
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
    </div>
  );
};

export default WeatherCard; // Export the Weathercard component.