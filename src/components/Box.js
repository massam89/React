export const Box = (props) => {
  return (
    <div className='App box'>
      <h2>{props.name}, {props.country}</h2>
      <h3>{props.main}</h3>
      <h3>{props.description}</h3>
      <h3>MIN Temp: {props.min + '\xB0'}F</h3>
      <h3>MAX Temp: {props.max + '\xB0'}F</h3>
      <h3>Location: {props.lon}, {props.lat}</h3>
    </div>
  )
}