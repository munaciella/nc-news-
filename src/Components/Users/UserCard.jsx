import React from 'react'


export default function UserCard({user}) {
    const {avatar_url: url, username} = user;
  return (
    <div className='user-card'>
        <img src={`${url}`} alt="image of the user" />
        <h3>{username}</h3>
    </div>
  )
}