import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AreaChart,Area,  XAxis, YAxis, Legend, Tooltip } from 'recharts';
import { DataContext } from './DataContext';
import {useContext} from 'react';

const WeatherChart = () => {
  
  const [temperatureData, setTemperatureData] = useState([]);
  const { weatherData } = useContext(DataContext);
  

  useEffect(() => {
    if(weatherData){
      const apiKey = '5cf0288f3687726736bc27eaa57978cf';
      const city = weatherData.name; 
      
  
  
      // Fetch hourly weather data for today and tomorrow
      const today = new Date().toISOString().slice(0, 10); // Get today's date in 'YYYY-MM-DD' format
      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10); // Get tomorrow's date
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
          const todayData = response.data.list.filter(item => item.dt_txt.startsWith(today));
          const tomorrowData = response.data.list.filter(item => item.dt_txt.startsWith(tomorrow));
          const combinedData = [...todayData, ...tomorrowData];
          const hourlyData = combinedData.map(item => ({
            timestamp: item.dt * 1000,
            time: new Date(item.dt * 1000),
            temperature: item.main.temp,
          }));
          setTemperatureData(hourlyData);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
    
   
  }, [weatherData]);

  return (
    <div className="pt-10 px-10">
     
      <AreaChart width={1300} height={300} data={temperatureData}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(timestamp) => {
            const time = new Date(timestamp);
            return `${time.getHours()}:${time.getMinutes()}`;
          }}
          interval={0} 
          padding={{ left: 10, right: 10 }}
          tick={{ fill: 'white', fontSize: 13 }}
          axisLine={{ stroke: 'white' }}// Display every data point
        />
        <YAxis dataKey="temperature"   hide />
        <Tooltip
          labelFormatter={(label) => {
            const time = new Date(label);
            return `${time.toDateString()}${time.getHours()}:${time.getMinutes()}`;
          }}
        />
        <Legend />
        <Area type="monotone" dataKey="temperature" fill="white" stroke="white" name="Hourly Temperature (°C)" fillOpacity={0.3} />
      </AreaChart>
    </div>
  );
};

export default WeatherChart;
