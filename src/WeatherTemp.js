import React from "react";

export default function WeatherTemp(props) {
  // const [unit, setUnit] = useState("celcius");
  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("fahrenheit");
  // }

  // function showCelcius(event) {
  //   event.preventDefault();
  //   setUnit("celcius");
  // }

  // function fahrenheitTemp() {
  //   return (props.celcius * 9) / 5 + 32;
  // }

  // if (unit === "celcius") {
  return (
    <span className="WeatherTemp">
      <span className="main-temp">{Math.round(props.celcius)}</span>
      <span className="unit">
        °C
        {/* <a href="/" onClick={showFahrenheit}>
          °F
        </a> */}
      </span>
    </span>
  );
  // } else {
  //   return (
  //     <span className="WeatherTemp">
  //       <span className="main-temp">{Math.round(fahrenheitTemp())}</span>
  //       <span className="unit">
  //         <a href="/" onClick={showCelcius}>
  //           °C
  //         </a>{" "}
  //         | °F
  //       </span>
  //     </span>
  //   );
  // }
}
