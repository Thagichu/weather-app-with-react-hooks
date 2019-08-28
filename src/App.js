import React, {useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

const proxy = 'https://cors-anywhere.herokuapp.com/'
const url = `${proxy}https://api.darksky.net/forecast/aa3ffcb4c74da763ce9759d10d08468f/-1.3032051,36.707309`


function App() {

  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(true)


const icons = {
  "clear-day": "", 
  "clear-night": "", 
  "rain":"", 
  "snow":"", 
  "sleet":"", 
  "wind":"", 
  "fog":"", 
  "cloudy":"", 
  "partly-cloudy-day":"",
  "partly-cloudy-night":"",
  "default":""
}

useEffect(async () => {
    const result = await axios(
      url
    );

    setWeatherData(result.data);
    console.log(result.data)
    setIsLoading(false);
  }, []);
   

  return (
    <div className="app">
    {isLoading ?
<h1>Loading</h1>:
<div>
   <h1>{weatherData.timezone}</h1>
   <h1>{weatherData.currently.summary}</h1>
   <div className="temp">
   <h1> <i class="fas fa-thermometer-quarter">
   </i>  {weatherData.currently.temperature}</h1>
   </div>
      <h1>{ new Date( weatherData.currently.time *1000).toGMTString()}</h1>
</div>
     }
   
    </div>
  );
}

export default App;
