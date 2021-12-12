import React from "react";

export default function ForecastDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurdsday",
    "Friday",
    "Saturday",
  ];
  let month = props.date.getMonth();
  let today = props.date.getDate();
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = ("0" + props.date.getMinutes()).slice(-2);

  return (
    <div className="ForecastDate">
      {month}/{today} {day} {hours}:{minutes}
    </div>
  );
}
