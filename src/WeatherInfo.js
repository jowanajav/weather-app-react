import React from "react";
import ForecastDate from "./ForecastDate";

import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div>
      <span className="city">{props.data.city}</span>
      <span className="country">{props.data.country}</span>
      <ul>
        <li>
          <ForecastDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row main-disp">
        <div className="col-6">
          <span>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"black"}
              size={40}
              animate={true}
            />
          </span>
          <span className="main-temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}