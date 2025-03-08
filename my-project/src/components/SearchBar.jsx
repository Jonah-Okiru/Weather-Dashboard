
// SearchBar component
import React, {useState, useEffect} from "react"; // Import React and hooks.
// Searchbar components receives searchQuery, setSearchQuery, and onSearch as props.
function SearchBar ({searchQuery, setSearchQuery, onSearch}) {
    return(
        <div className="flex justify-center mb-6">
            {/* Input field for entering the search query */}
            <input 
                type="text" 
                placeholder="Enter the city name..."
                value={searchQuery} // Controlled component with value from state
                onChange={(e) => setSearchQuery(e.target.value)} // update searchQuery state on input change.
                className="w-full max-w-lg border border-gray-400 rounded-lg"
            />
            {/* Search button triggers the onSearch function */}
            <button
                onClick={onSearch}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            >
                Search
            </button>
        </div>
    )

}
export default SearchBar; // Export the searchBar component.