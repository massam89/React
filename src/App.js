import { useState } from 'react';
import Search from './components/Search'
import { Box } from './components/Box'
import './App.css';
require('dotenv').config()

function App() {
  const [datas, setData] = useState([]);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCity, setIsCity] = useState(true);
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setError(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (data.name) {
          setIsCity(true);
          setData([data, ...datas])
        } else {
          setIsCity(false)
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }

  return (
    <>
      <h1 className='heading'>Weather</h1>
      <Search
        onSubmit={onSubmit}
        city={city}
        setCity={setCity}
        loading={loading}
        isCity={isCity}
        error={error}
      />

      <div>
        {datas.map((data, index) =>
          <Box
            key={index}
            name={data.name}
            country={data.sys.country}
            main={data.weather[0].main}
            description={data.weather[0].description}
            min={data.main.temp_min}
            max={data.main.temp_max}
            lon={data.coord.lon}
            lat={data.coord.lat}
          />
        )}
      </div>
    </>
  )
}

export default App;