import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from './components/Card'
// import Button from './components/Button'


function App() {

  const [count, setCount] = useState(0);

  function handleClick() 
  {
    setCount(count+1);
  }

  return (
   <div>

    <Button Click={handleClick} text="Click me">

      {count}
    </Button>



    {/* <Card>
      <h1>Google Preparation</h1>
      <p>Practice for Google Interviews</p>
      <p>Will be consistent</p>
    </Card> */}
   </div>
  )
}

export default App
