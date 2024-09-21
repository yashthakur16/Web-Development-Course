import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick()
  {
    alert("I am Clicked")
  }

  function handleHover()
  {
    alert("I am Hovered")
  }

  function handleChange(e)
  {
    console.log("I am Changed "+e.target.value)
  }

  function handleSubmit(e)
  {
    e.preventDefault();
    alert("I am Submited");
  }

  return (
    <div>

      <form onSubmit={handleSubmit} >
        <input type="text" name="" id="" onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>



      {/* <button onClick={handleClick}>
        Click Me
      </button>
      <p onMouseOver={handleHover} style={{maxWidth:"100px"}}>
        Hover me

      </p> */}
    </div>
  )
}

export default App
