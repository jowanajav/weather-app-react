import React from "react";
import Weather from "./Weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="date">
        <span>10/31 </span>
        <span>Sunday </span>
        <span>18:00</span>
      </div>
      <Weather />
    </div>
  );
}
