
import React, {useState}  from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [ temp , setTemp] = useState({ temperature: 25, conditions: "Sunny" })
  return (
    <div>
        <WeatherDisplay temp={temp} />
    </div>
  )
}

export default App
