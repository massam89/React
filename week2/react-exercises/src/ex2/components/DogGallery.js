import React, { useState } from 'react'
import Button from './Button';
import DogPhoto from './DogPhoto'

const DogGallery = () => {
  const [dogPhoto, setDogPhoto] = useState([])
  const [loading, setLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);

  const getDogPhoto = () => {
    setLoading(true);
    setHasErr(false);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setLoading(false);
          setHasErr(false);
          setDogPhoto([...dogPhoto, data.message])
        } else {
          setLoading(false)
          setHasErr(true)
        }
      })
      .catch(err => {
        setLoading(false)
        setHasErr(true)
      })
  };

  return (
    <div>
      <Button dogPhoto={dogPhoto} getDogPhoto={getDogPhoto} />
      {dogPhoto.map((item, index) => <DogPhoto key={index} item={item} />)}
      {loading && <h1>loading...</h1>}
      {hasErr && <h1>Something's wrong...</h1>}
    </div>
  )
}

export default DogGallery
