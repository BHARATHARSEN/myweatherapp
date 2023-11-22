import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';
import clear_icon from '../Assets/clear.png';
import drizzle_icon from '../Assets/drizzle.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';

const WeatherApp = () => {
  let apiKey = "dd1eca02a695669e2f9d4b38da63be67";
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');

    if (element[0].value === "") {
      return 0;
    }

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${element[0].value},GB&limit=1&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/hr";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
    location[0].innerHTML = data.name;

    setWicon(getWeatherIcon(data.weather[0].icon));
  };

  const getWeatherIcon = (iconCode) => {


    // Example mapping:
    switch (iconCode) {
      case '01d':
      case '01n':
        return clear_icon;
      case '02d':
      case '02n':
        return cloud_icon;
      case '03d':
      case '03n':
        return drizzle_icon;
      case '04d':
      case '04n':
        return drizzle_icon;
      case '09d':
      case '09n':
        return rain_icon;
      case '10d':
      case '10n':
        return rain_icon;
      case '13d':
      case '13n':
        return snow_icon;
      default:
        return cloud_icon;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Search" className="cityInput" />
        <div className="search-icon">
          <img src={search_icon} onClick={search} alt="Search Icon" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="Weather Icon" />
      </div>

      <div className="weather-temp">63°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} className="icon" alt="Humidity Icon" />
          <div className="data">
            <div className="humidity-percent">65%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} className="icon" alt="Wind Icon" />
          <div className="data">
            <div className="wind-speed">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
