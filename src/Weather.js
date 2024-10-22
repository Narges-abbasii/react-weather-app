import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleRespose(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.describtion}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b318adc2a4e42ff5a70at1cf59b30fbo";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unts=metric`;
    axios.get(apiUrl).then(handleRespose);
    return "App is loading";
  }
}
