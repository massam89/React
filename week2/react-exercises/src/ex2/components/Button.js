import React from 'react'

const Button = ({ getDogPhoto, dogPhoto }) => {
  return (
    <button onClick={getDogPhoto}>{dogPhoto.length === 0 ? 'Get your first dog by clicking the button!' : 'Get a dog'}</button>
  )
}

export default Button
