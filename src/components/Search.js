import React from 'react'

const Search = ({ onSubmit, city, setCity, loading, isCity, error }) => {
  return (
    <>
      <form className='heading' onSubmit={onSubmit}>
        <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
        <input type='submit' value='Search' />
        {loading && <span>Loading...</span>}
        {!isCity && <span>City is not found...</span>}
        {error && <span>Something is wrong!</span>}
      </form>
    </>
  )
}

export default Search
