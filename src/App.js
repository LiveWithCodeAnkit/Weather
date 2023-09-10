import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Details from './components/Details';
import HourlyChart from './components/HourlyChart.jsx';
import { DataContextProvider } from './components/DataContext'; 


const App = () => {
 
  return (
    <div className="App">
     
     <DataContextProvider >
      <Navbar />
      <Details />
      <HourlyChart/>
    </DataContextProvider>
    
     
    
      
      
    </div>
  );
};

export default App;
