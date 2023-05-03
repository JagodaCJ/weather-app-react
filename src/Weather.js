import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}C`
    );
  }
  let apiKey = "94da73842400c47b33ee3fb20e977a4a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(api.Url).then(handleResponse);
  return <h2>Hello from Weatger</h2>;
}
