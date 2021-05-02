import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import {
  Link
} from "react-router-dom";

const Box = ({ data: { name, sys, weather, main, coord, id } }) => {
  const { onDelete, fetchForecast } = useContext(AppContext);

  return (
      <div id={id} className='box'>
        <h2>{name}, {sys.country}</h2>
        <h3>{weather[0].main}</h3>
        <h3>{weather[0].description}</h3>
        <h3>MIN Temp: {Math.round(main.temp_min - 273) + '\xB0'}C</h3>
        <h3>MAX Temp: {Math.round(main.temp_max - 273) + '\xB0'}C</h3>
        <h3>Location: {coord.lon}, {coord.lat}</h3>
        <div style={{ textAlign: 'center' }} onClick={onDelete}>
          <span className='deleteButton' style={{ cursor: 'pointer', color: 'red' }}>X</span>
        </div>

        <Link to={`forecast/${id}`}>
          <button id={name} onClick={fetchForecast}>Forecast 5-day</button>
        </Link>
      </div>
  )
}

export default Box;