import React, { useState } from 'react'
import Butttun from './Button'
import FriendProfile from './FriendProfile'

const Friend = () => {
  const [friend, setFriend] = useState({})
  const [loading, setLoading] = useState(false);
  const [hasErr, setHasErr] = useState(false);

  const getFriend = () => {
    setLoading(true);
    setHasErr(false);
    setFriend({});
    fetch('https://www.randomuser.me/api?results=1')
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setHasErr(false);
        setFriend(data.results[0])
      })
      .catch(err => {
        setLoading(false)
        setHasErr(true)
      })
  };

  return (
    <div>
      <Butttun getFriend={getFriend} />
      {friend.name === undefined ? null : <FriendProfile friend={friend} />}
      {loading && <h1>loading...</h1>}
      {hasErr && <h1>Something's wrong...</h1>}
    </div>
  )
}

export default Friend
