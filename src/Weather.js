import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <hr />
      <h1>Japan</h1>
      <ul>
        <li>10/31 Sunday 18:00</li>
        <li id="weatherStat">broken clouds</li>
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
          <span className="main-temp"> 12</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 20%</li>
            <li>Wind: 1km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
