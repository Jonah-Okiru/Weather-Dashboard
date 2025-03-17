# Weather Dashboard

## Project Overview
The **Weather Dashboard** is a frontend project that enables users to search for and view the current weather conditions of various cities. The application fetches weather data from a public weather API and displays relevant information in a user-friendly interface. This project emphasizes **ReactJS**, **API integration**, **responsive UI design**, and **deployment**.

## Features
### 1. Weather Data Fetching
- Fetches real-time weather data from a public API (e.g., OpenWeatherMap).
- Displays key weather details including:
  - **Temperature** (°C/°F)
  - **Humidity** (%)
  - **Wind Speed** (km/h or mph)
  - **Weather Condition Icon** (e.g., sunny, cloudy, rainy)

### 2. City Search Functionality
- Users can search for a city via an input search bar.
- Displays weather data for the specified city upon submission.
- Handles invalid city names with user-friendly error messages.

### 3. Responsive UI Design
- Built with **ReactJS** and optionally styled using **Tailwind CSS**.
- Ensures optimal viewing on different screen sizes (desktop, tablet, mobile).
- Provides an intuitive and visually appealing user experience.

### 4. Real-Time Weather Updates
- Optionally updates weather data automatically every few minutes.
- Includes a manual **refresh button** to fetch the latest weather information.

### 5. Error Handling
- Manages potential issues such as:
  - Network failures
  - Invalid API responses
  - Incorrect city names
- Displays appropriate error messages or alerts.

## Technical Requirements
### Project Setup
- Set up a React project using **Vite** or create a custom configuration.
- Integrate **Tailwind CSS** for styling.

### API Integration
- Register for an API key with **OpenWeatherMap** (or another weather API).
- Fetch weather data using `fetch` or `axios`.
- Display structured weather information dynamically.

### User Interface Components
- **SearchBar**: Allows users to enter a city name.
- **WeatherCard**: Displays fetched weather details.
- **ErrorMessage**: Handles and shows error messages gracefully.
- Ensures consistency in **colors, typography, and spacing**.

### State Management
- Utilizes React’s **useState** and **useEffect** hooks for state management.
- Optionally implements advanced state management tools like **Redux** or **Zustand**.

### Deployment
- Deploys the application on **Netlify** or **Vercel**.

## Stretch Goals (Optional)
### 1. Local Storage for Recent Searches
- Saves recent city searches using **localStorage**.
- Displays search history as suggestions.

### 2. Weekly Weather Forecast
- Extends the dashboard to include a **7-day weather forecast**.
- Shows daily high/low temperatures and weather conditions.

### 3. Theme Customization
- Implements **light/dark mode** toggle.
- Dynamically changes background based on current weather conditions.

### 4. Geolocation API
- Uses the **browser’s Geolocation API** to detect the user's location.
- Automatically displays weather for the detected city upon page load.

### 5. Internationalization (i18n)
- Supports multiple languages for weather information.
- Allows users to select their preferred language.

## How to Run the Project
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file.
   - Add your OpenWeatherMap API key:
     ```sh
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. **Deploy the application:**
   - Deploy to Netlify/Vercel following their respective guidelines.

## Technologies Used
- **ReactJS**
- **Tailwind CSS** (optional)
- **JavaScript (ES6+)**
- **OpenWeatherMap API**
- **Axios or Fetch API**
- **Local Storage (for recent searches)**
- **Geolocation API** (optional)
- **Netlify/Vercel for Deployment**

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.


