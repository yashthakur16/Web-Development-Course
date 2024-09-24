import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    function handleHomeClick() 
    {
        navigate('/about')

    }
  return (
    <div>
      Home Page
      <button onClick={handleHomeClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
