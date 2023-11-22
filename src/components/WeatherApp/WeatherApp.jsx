import React from "react";
import './WeatherApp.css';

import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
import clear_icon from "../Assets/clear.png";
import drizzle_icon from "../Assets/drizzle.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";


const WeatherApp = () => {
  const search = async () => {
    // Implement your search functionality here
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Search" className="cityInput" />
        <div className="search-icon">
          <img src={search_icon} alt="Search Icon" />
        </div>
      </div>

      <div className = "weather-image">
        <img src = {cloud_icon}/>
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
            <div className="wind-speed">18km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
          
        </div>
      </div>

     
    </div>
  );
}

export default WeatherApp;
