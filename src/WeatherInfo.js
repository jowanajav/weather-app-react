import React from "react";
import ForecastDate from "./ForecastDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div>
      <span className="city">{props.data.city}</span>
      <span className="country">{props.data.country}</span>
      <ul>
        <li>
          <ForecastDate date={props.data.date} />
        </li>
        <li className="text-capitalize mt-1">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-5">
          <span>
            <WeatherIcon code={props.data.icon} size={45} />
          </span>
          <WeatherTemp celcius={props.data.temperature} />
        </div>
        <div className="col-3">
          <ul className="otherTemperature">
            <li>
              <span className="feelTemp">Feels like: </span>
              <span>{Math.round(props.data.feelsLike)}°C</span>
            </li>
            <li>
              <strong>{Math.round(props.data.maxTemp)}°C</strong>{" "}
              <span className="minTemp">
                {Math.round(props.data.minTemp)}°C
              </span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
