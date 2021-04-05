import React from 'react'

const Joke = ({ joke }) => {
  return (
    <>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </>
  )
}

export default Joke;