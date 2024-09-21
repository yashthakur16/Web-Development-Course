
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
 
  const [name,setname] =useState('');

  return (
   <div>
    <Card name={name} setName={setname}/>
    <Card name={name} setName={setname}/>
    <p>I am inside of parent components and value of name is : {name}</p>
   </div>
  )
}

export default App
