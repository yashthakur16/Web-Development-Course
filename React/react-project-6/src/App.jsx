import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  
  const [isLoggedIn, setLoggedIn] =useState(true);

 
 
  return(
    <div>
      {isLoggedIn ? <Login/> : <Logout/>}
    </div>
  )


  // if(isLoggedIn) {

  //   return (
  //     <div>
  //       <Login />
  //     </div>
  //   )

  // }
  // else
  // {
  //   return (
  //     <div>
  //       <Logout/>
  //     </div>
  //   )
  // }
}

export default App
