import { useState } from "react";
import axios from "axios";

const weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const handleCitychange = (e) => {
    setCity(event.target.value);
  };
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`9ae2200eb82722de0ffc52f3ea098a71`
}`
      );
      setWeather(response);
     } catch (error)
     {
console.log("Errors Fetching weather data")
     }
  };
  console.log(weather, ' weather')
  const handleClick = () => {
    fetchWeather();
  };
  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handleCitychange}
      /> <br />
      <button onClick={handleClick}>Get Weather</button>
      {weather && <>
      <div className="weather-info">
    <h3>{weather.data.name}</h3>
    <p >Temperature is {weather.data.main.temp} </p>
    <p>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  );
};

export default weather;
