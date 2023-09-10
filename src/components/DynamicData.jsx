import React from 'react';

const WeatherApp = ({ weatherType }) => {
    
  
    
  const getWeatherIcon = () => {
    switch (weatherType) {
      case 'clear sky':
        return '☀️';
      case 'partly cloudy':
        return '⛅';
      case 'cloudy':
        return '☁️';
      case 'rain':
        return '🌧️';
        case 'light rain':
        return '🌧️';
      case 'thunderstorm':
        return '⛈️';
      case 'snow':
        return '❄️';
      case 'fog':
        return '🌫️';
      case 'windy':
        return '💨';
      case 'haze':
        return '🌫️';
        case 'mist':
          return '🌫️'; // Haze or mist
      case 'broken clouds':
        return '🌥️'; // Broken clouds
      case 'overcast clouds':
        return '🌦️'; // Overcast
      case 'drizzle':
        return '🌦️'; // Drizzle
      case 'smoke':
        return '🌫️'; // Smoke or smog
      case 'sleet':
        return '🌨️❄️'; // Sleet
      case 'tornado':
        return '🌪️'; // Tornado
      case 'hurricane':
        return '🌀'; // Hurricane or cyclone
      case 'freezingRain':
        return '🌧️❄️'; // Freezing rain
      default:
        return '🌥️'; // Use a question mark for unknown weather types
    }
  };

 

  return (
    <div>
      <div className="text-7xl">{getWeatherIcon()}</div>
    </div>
  );
};

export default WeatherApp;


