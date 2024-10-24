import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weatherForecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
      />
      <div className="weatherForecast-tempretures">
        <span className="weatherForecast-tempretures-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-tempretures-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
