// SearchBar Component
// This component handles user input for searching city weather
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="flex space-x-2">

       <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
      />
      <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSearch}
      >
            Search
      </button>
    </div>
  );
};

export default SearchBar;