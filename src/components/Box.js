export const Box = ({ id, name, country, main, description, min, max, lon, lat, onDelete }) => {

  return (
    <div className='App box'>
      <h2>{name}, {country}</h2>
      <h3>{main}</h3>
      <h3>{description}</h3>
      <h3>MIN Temp: {min + '\xB0'}F</h3>
      <h3>MAX Temp: {max + '\xB0'}F</h3>
      <h3>Location: {lon}, {lat}</h3>
      <div style={{ textAlign: 'center' }} onClick={onDelete}>
        <span id={id} style={{ cursor: 'pointer', color: 'red' }}>
          X
          </span>
      </div>
    </div>
  )
}