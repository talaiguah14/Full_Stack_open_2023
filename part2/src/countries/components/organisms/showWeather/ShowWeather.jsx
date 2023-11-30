import axios from "axios";
import React, { useState, useEffect } from "react";

const ShowWeather = (props) => {
  const { capital } = props;
  const [weatherData, setWeatherData] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const URL = "http://api.openweathermap.org/data/2.5/weather";
  const URLImg = "https://openweathermap.org/img/wn/";
  const URLImgFin = "@2x.png";
  const params = {
    q: capital[0],
    units: "metric",
    appid: api_key,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL, { params });
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };
    fetchData();
  }, []);
  console.log("weatherData", weatherData);
  console.log("temperatura", weatherData.main);

  const windSpeed = () =>{
    const speed = ((weatherData.wind.speed) * 2.237).toFixed(2)
    return speed
  }

    
  
    const getWindDirection = () => {
      const degrees = (weatherData.wind.deg); 
      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      const index = Math.round(degrees / 45) % 8;
      return directions[index];
    };

  return (
    <div>
      <h3>Weather in {capital}</h3>
      {weatherData && weatherData.main && (
        <p>Temperature: {weatherData.main.temp}°C</p>
      )}
      {weatherData && weatherData.weather && (
        <img
          src={URLImg + (weatherData.weather[0].icon) + URLImgFin}
          alt="Descripción de la imagen"
        />
      )}
      {weatherData && weatherData.wind && (
        <p><strong>Wind:</strong> {windSpeed()} mph direction {getWindDirection()}</p>
      )}
    </div>
  );
};

export default ShowWeather;
