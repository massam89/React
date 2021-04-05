import React from 'react'

const FriendProfile = ({ friend }) => {
  return (
    <ul>
      <li>First Name: {friend.name.first}</li>
      <li>Last Name: {friend.name.last}</li>
      <li>Address: {friend.location.street.number}, {friend.location.street.name}</li>
      <li>Country: {friend.location.country}</li>
      <li>Phone Number: {friend.phone}</li>
    </ul>
  )
}

export default FriendProfile
