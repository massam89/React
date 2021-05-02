import React, { useContext } from 'react'
import { AppContext } from './AppContext';
import {
  Link
} from "react-router-dom";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";

const Forecast = () => {
  const {  forecastData, loading } = useContext(AppContext);

  return (
    <>
    
      <div>
        <Link to='/'><button className='backButton'>Back</button></Link>
      </div>
      {loading ? <h3>Loading</h3> :
      <ResponsiveContainer width='100%' height={400}>
        <AreaChart className='chart' data={forecastData}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#B23850" stopOpacity={0.8} />
            <stop offset="100" stopColor="#B23850" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#B23850" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#B23850" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="temp" stroke="#B23850" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
     </ResponsiveContainer> 
     }
     
    </>
  )
}

export default Forecast
