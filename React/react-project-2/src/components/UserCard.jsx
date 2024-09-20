import React, { useState } from 'react'

import './UserCard.css'


const UserCard = (props) => {
  const [Count,setCount]=useState(0);
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>You have clicked {Count} time</p>
        <button onClick={() =>
          {
            setCount(Count+1);
          }
        }>Click me</button>      
    </div>
  )
}

export default UserCard
