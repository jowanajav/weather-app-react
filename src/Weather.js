import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="date">
        <span>10/31 </span>
        <span>Sunday </span>
        <span>18:00</span>
      </div>
      <div className="weather">broken clouds</div>
      <div className="row main-disp">
        <div className="col-5">
          <span>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"black"}
              size={40}
              animate={true}
            />
          </span>
          <span className="main-temp"> 12</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <div className="humid">
            Humidity: <span id="humidity">20</span>%
          </div>
          <div className="windSpeed">
            Wind: <span id="wind">1</span>km/h
          </div>
        </div>
      </div>
    </div>
  );
}
