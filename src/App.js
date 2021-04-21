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
  const [charLim, setCharLim] = useState(false);
  const [repeat, setRepeat] = useState(false)

  const cityIds = datas.map(item => item.id);

  const onSubmit = (e) => {
    e.preventDefault();

    if (city.length > 0) {
      setRepeat(false)
      setLoading(true);
      setError(false);
      setIsCity(true);
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
      fetch(API)
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          if (data.name) {
            if (cityIds.some(item => item === data.id)) {
              setRepeat(true)
            } else {
              setIsCity(true);
              setData([data, ...datas])
            }
          } else {
            setIsCity(false)
          }
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        })
        .finally(() => {
          setCharLim(false)
          setCity('');
        })
    } else {
      setCharLim(true)
    }
  }

  const onDelete = (e) => {
    const newData = datas.filter(data => data.id !== parseInt(e.target.id));
    setData(newData)
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
        charLim={charLim}
        repeat={repeat}
      />

      <div>
        {datas.map((data, index) =>
          <Box
            key={index}
            id={data.id}
            name={data.name}
            country={data.sys.country}
            main={data.weather[0].main}
            description={data.weather[0].description}
            min={data.main.temp_min}
            max={data.main.temp_max}
            lon={data.coord.lon}
            lat={data.coord.lat}
            onDelete={onDelete}
          />
        )}
      </div>
    </>
  )
}

export default App;