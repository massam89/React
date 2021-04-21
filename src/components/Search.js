import React from 'react'

const Search = ({ onSubmit, city, setCity, loading, isCity, error, charLim, repeat }) => {
  return (
    <>
      <form className='heading' onSubmit={onSubmit}>
        <input placeholder='Search city' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
        <input type='submit' value='Search' disabled={city.length === 0 ? true : false} />
        {loading && <span>Loading...</span>}
        {!isCity && <span>City is not found...</span>}
        {error && <span>Something is wrong!</span>}
        {charLim && <span>You have to enter at least 1 character</span>}
        {repeat && <span>You searched this city before...</span>}
      </form>
    </>
  )
}

export default Search
