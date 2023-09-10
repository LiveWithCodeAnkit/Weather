import { DataContext } from './DataContext';
import {useContext} from 'react';
import WeatherApp from './DynamicData';




const Details =() =>{
 
  const { weatherData } = useContext(DataContext);
 

  
    return(
        <>
       
        <div>
      {weatherData ? (
       
       <div className=" flex items-center justify-center text-white">
       <div className="text-center">
         <h1 className="text-2xl pt-3">{weatherData.name} , {weatherData.sys.country}</h1>
         <div className='flex ml-10 my-1.5'>
         <WeatherApp weatherType={weatherData.weather[0].description} />
           <h1 className="text-7xl ml-5">{(weatherData.main.temp-273.15).toFixed(1)}°C</h1>
           <div className='ml-5 text-2xl mt-1.5'>
             
           </div>
         </div>
         <h1 className="text-2xl">{weatherData.weather[0].description}</h1>
        
         
         <div className="flex mt-2 ml-5">
         <h1 className="text-sm">Feels like  {(weatherData.main.feels_like-273.15).toFixed(1)}°C</h1>
         <h1 className="text-sm  px-6">Wind {weatherData.wind.speed} m/s</h1>
         <h1 className="text-sm  px-6">Visibility {weatherData.visibility} km</h1>
       </div>
       <div className="flex text-center">
         <h1 className="text-sm  px-6">Min Temp {(weatherData.main.temp_min-273.15).toFixed(1)}°C</h1>
         <h1 className="text-sm  px-6">Humidity {weatherData.main.humidity} % </h1>
         <h1 className="text-sm  px-6">Max Temp {(weatherData.main.temp_max-273.15).toFixed(1)}°C</h1>
       </div>
       </div>
       </div>
      ) : (
        <div className=" flex items-center justify-center text-white">
       <div className="text-center">
         <h1 className="text-2xl pt-3">City,Country</h1>
         <div className='flex ml-10 my-1.5'>
          <h1 className='text-7xl'>🌧️</h1>
           <h1 className="text-7xl ml-5">20°C</h1>
           <div className='ml-5 text-2xl mt-1.5'>
             
           </div>
         </div>
         <h1 className="text-2xl">Rain</h1>
        
         
         <div className="flex mt-2 ml-5">
         <h1 className="text-sm">Feels like °C</h1>
         <h1 className="text-sm  px-6">Wind  m/s</h1>
         <h1 className="text-sm  px-6">Visibility  km</h1>
       </div>
       <div className="flex text-center">
         <h1 className="text-sm  px-6">Min Temp°C</h1>
         <h1 className="text-sm  px-6">Humidity  % </h1>
         <h1 className="text-sm  px-6">Max Temp °C</h1>
       </div>
       </div>
       </div>
      )}
      </div>
       
     
  
        </>
    )
}

export default Details;