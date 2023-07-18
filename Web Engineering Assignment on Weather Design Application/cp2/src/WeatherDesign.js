import React from 'react';
import './App.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
  <div className='bgmain'>
  <div className="main" >

      <div className="top" >
        <p className="header">{weatherData.name}</p>

        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} >Refresh</Button>
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div>
        <div >
      <img className='imageIcon' src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>
      </div>
        <p className="desc">Weather Description: {weatherData.weather[0].description} </p>
        
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="temp">Min Temprature: {weatherData.main.temp_min} &deg;C</p>
        <p className="temp">Max Temprature: {weatherData.main.temp_max} &deg;C</p>
      </div>

      <div className="flex">
        <p className="temp">Latitude: {weatherData.coord.lat}</p>
        <p className="temp">Longitude: {weatherData.coord.lon}</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
  </div>
)

export default WeatherCard;