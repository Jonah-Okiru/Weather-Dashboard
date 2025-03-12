import { useState } from 'react' // Import react and hooks
import SearchBar from './components/SearchBar' // Import searchBar component
import './App.css'
function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search inputs
  // Function to fetch weather from the weather api
  /*const fetchWeather = async () {
    if (!searchQuery.trim()) {

    }
  } */


  return (
    <div className='min-h-screen'>
      {/* Header section */}
      <header className='p-4 flex flex-col items-center text-center space-y-4 sm:flex-row sm:justify-between sm:px-6'>
        <h1 className='text-2xl sm:text-3xl font-bold'>Weather Dashboard</h1>
      </header>
      {/* Main container */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Search Bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      </div>
    </div>
  )
}

export default App
