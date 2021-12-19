import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeatherForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function mimTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function getCurrentDate() {
    let date = new Date(props.data.dt * 1000);
    let month = date.getMonth() + 1;
    let dateDay = date.getDate();

    return `${month}/${dateDay}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="DailyWeatherForecast">
      <div className="dailyForecast mb-1">
        <span className="dailyForecastDay">{getCurrentDate()}</span>
        <span className="dailyForecastDate">{day()}</span>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="dailyForecastDescription mt-1">
        {props.data.weather[0].description}
      </div>
      <div className="dailyForecastTemp mt-1">
        <span className="dailyForecastMax">{maxTemp()}°</span>
        <span className="dailyForecastMin">{mimTemp()}°</span>
      </div>
    </div>
  );
}
