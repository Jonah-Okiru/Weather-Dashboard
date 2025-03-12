import React, {useEffect, useState} from "react"; // import react and hooks
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
// WeatherList component receives weather as prop
function WeatherCard ({weathers}){
    return (
        // Responsive grid layout for displaying weather information
        <div className="grid grid-cols-1">
            {/* Iterate over the weather array and render each weather */}
            {weathers.map((weather) =>(
                <motion.div
                    key={weather.id}
                    whileHover={{scale: 1.05}}
                    className="cursor-auto"

                >
                    <div className="bg-white shadow rounded-lg">
                        {/* Display of the weather condition icon */}
                        <img 
                            src={weather.icon !=="N/A" ? weather.icon : "/icon.png"} 
                            alt={weather.icon} // accessible alternative text for the image icon
                            className="w-full object-cover rounded-t-lg"
                        />
                        <div>
                            {/* Temprature */}
                            <h2 className="font-semibold text-sm text-gray-800">Temperature{weather.temp}</h2>
                            {/* Humidity */}
                            <h2 className="font-semibold text-sm text-gray-800">Humidity: {weather.humidity}</h2>
                            {/* Wind speed */}
                            <h2 className="font-semibold text-sm text-gray-800">Wind Speed: {weather.speed}</h2>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

    )
}
export default WeatherCard;