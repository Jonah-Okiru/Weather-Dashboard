// SearchBar Component
// This component handles user input for searching city weather
import React, { useState } from "react";

const SearchBar = ({ onSearch, recentSearches = [] }) => {
  // State to store user input (City name)
  const [city, setCity] = useState("");
  // Function to handle search action
  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city); // Call parent function with city name
    }
  };

  return (
    <div className="flex space-x-2">
      {/* Input field for entering city name */}
       <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)} // Update city state
      />
      {/* Recent Seaeches dropdown */}
      {recentSearches.length > 0 && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-2">
          <p className="text-gray-700 text-sm font-semibold">Recent Searches</p>
          {recentSearches.map((search, index) =>(
            <p
              key={index}
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => onSearch(search)}
            >
              {search}
            </p>
          ))}
        </div>
      )}
      {/* Button to trigger search action */}
      <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={handleSearch}
      >
            Search
      </button>
    </div>
  );
};

export default SearchBar;