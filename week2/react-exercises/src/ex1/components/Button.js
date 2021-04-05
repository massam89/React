import React from 'react'

const Button = ({ getFriend }) => {
  return (
    <button onClick={getFriend}>Get a friend</button>
  )
}

export default Button
