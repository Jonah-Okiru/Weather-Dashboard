// WeatherCard Component
// This component displays the fetched weather data
import React from "react"; // Import React 
// WeatherCard function
const WeatherCard = ({ data }) => {
  return (
    
    <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
      {/*  */}
      <h2 className="text-2xl font-bold">{data.name}, {data.sys.country}</h2>
      <p className="text-lg">Temperature: {data.main.temp}°C</p>
      <p className="text-lg">Humidity: {data.main.humidity}%</p>
      <p className="text-lg">Wind Speed: {data.wind.speed} km/h</p>
      <img
         src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
         alt={data.weather[0].description}
      />
      <p className="text-lg capitalize">{data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;