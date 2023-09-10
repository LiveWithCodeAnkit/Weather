import { createContext, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <DataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
