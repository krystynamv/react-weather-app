import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheith(event) {
    event.preventDefault();
    setUnit("farenheith");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function ferenheith() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFarenheith}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(ferenheith())}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
