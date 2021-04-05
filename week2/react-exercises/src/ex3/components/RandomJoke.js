import React, { useState, useEffect } from 'react'
import Joke from './Joke'

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);

  useEffect(() => {
    setLoading(true);
    setHasErr(false);
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        setJoke(data)
        setLoading(false);
        setHasErr(false);
      })
      .catch(err => {
        setLoading(false)
        setHasErr(true)
        console.log(err)
      })
  }, [count])

  return (
    <div>
      <Joke joke={joke} />
      <button onClick={() => setCount(count + 1)}>Click To Get Another Joke</button>
      {loading && <h1>loading...</h1>}
      {hasErr && <h1>Something's wrong...</h1>}
    </div>
  )
}

export default RandomJoke;