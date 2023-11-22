import React, { useState} from 'react';

import './WeatherApp.css';

import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
import clear_icon from "../Assets/clear.png";
import drizzle_icon from "../Assets/drizzle.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";


const WeatherApp = () => {

  let apiKey = "dd1eca02a695669e2f9d4b38da63be67";
  const[wicon, setWicon] = useState('cloud_icon')


  const search = async () => {
    // Implement your search functionality here
    const element = document.getElementsByClassName('cityInput');
    
    if(element[0].value===""){
      return 0;
    }

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${element[0].value},{GB}&limit={limit}&appid={dd1eca02a695669e2f9d4b38da63be67}`

    let response = await fetch(url);

    let data = await response.json

    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-speed")
    const temperature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")


    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = Math.floor(data.innerHTML.wind);
    temperature[0].innerHTML = Math.floor(data.main.temp)+" °c";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === "o1d" || data.weather[0].icon === "01n"){
      setWicon(clear_icon);
    }

    else if (data.weather[0].icon === "o2d" || data.weather[0].icon === "02n"){
      setWicon(cloud_icon);
    }

    else if (data.weather[0].icon === "o3d" || data.weather[0].icon === "03n"){
      setWicon(drizzle_icon);      
    }
    else if (data.weather[0].icon === "o4d" || data.weather[0].icon === "04n"){
      setWicon(drizzle_icon);      
    }
    else if (data.weather[0].icon === "o9d" || data.weather[0].icon === "09n"){
      setWicon(rain_icon);      
    }
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
      setWicon(rain_icon);      
    }
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
      setWicon(snow_icon);
    }
    




  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Search" className="cityInput" />
        <div className="search-icon">
          <img src={search_icon} onClick = {search} alt="Search Icon" />
        </div>
      </div>

      <div className = "weather-image">
        <img src = {setWicon}/>
      </div>

      <div className="weather-temp">63°c </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src ={humidity_icon} className = "icon"/>
          <div className="data">
            <div className="humidity-percent">655</div>
            <div className="text">Humidity</div>
          </div>
          
        </div>
        <div className="element">
          <img src = {wind_icon} className = "icon"/>
          <div className="data">
            <div className="wind-speed">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
          
        </div>
      </div>

     
    </div>
  );
}

export default WeatherApp;


// https://www.youtube.com/watch?v=7JqdjWB88Kk
