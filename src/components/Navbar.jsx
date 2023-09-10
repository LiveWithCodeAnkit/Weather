import axios from 'axios';
import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext'; // Import DataContext

const Navbar = () => {
  const [cityName, setCityName] = useState('');
  // eslint-disable-next-line 
  const { weatherData, setWeatherData } = useContext(DataContext); 
  // eslint-disable-next-line  
  // Access weatherData and setWeatherData from DataContext
  const apiKey = '5cf0288f3687726736bc27eaa57978cf';

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearchKeyPress = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName || 'Alwar'}&appid=${apiKey}&units="metric"`
        );
  
        setWeatherData(response.data); // Update weatherData in DataContext
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      }
      setCityName("");
    }
   
    
  };

  return (
    <>
      <div className="Navbar flex items-center justify-between  p-3">
        <h1 className="text-white text-3xl px-10 text-blue-700 border-blue-500">Weather</h1>
        <input
          type="text"
          placeholder="Search By City"
          className="px-14 py-1 rounded-lg bg-white text-gray-800 text-left placeholder-gray-400 w-60 mx-10    border-2 border-blue-600  focus:outline-none focus:border-blue-700"
          value={cityName}
          onChange={handleChange}
          onKeyPress={handleSearchKeyPress}

        />
       
      </div>
    </>
  );
};

export default Navbar;
