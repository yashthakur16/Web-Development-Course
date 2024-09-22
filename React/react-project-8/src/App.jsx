import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [count,setcount] =useState(0);
  const [total,settotal] =useState(1);
  const [loading,setloading] =useState(true);
  const [data,setdata] = useState([]);

  // useEffect(()=>{
  //   alert("I will run on each render")
  // })

  // useEffect(()=>{
  //   alert("I will run on only first render")

  // }, [])

  // useEffect(()=>
  //   {
  //     alert("I will run on each count")
  //   },[count])

  function handleClick()
  {
    setcount(count+1);
  }

  function handleClick2()
  {
    settotal(total+1);
  }

  // useEffect(()=>
  //   {
  //     alert("I will run on each count")
  //   },[count,total])

  // useEffect(()=>
  //   {
  //     alert("Count is updated")
  //     return ()=>
  //     {
  //       alert("Count is unmounted")
  //     }
  //   },[count])

  
  useEffect(()=>
    {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setdata(data);
        setloading(false);
      })
    },[])




  return (
  <div>
    {/* <h1>Count: {count}</h1>
  <button onClick={handleClick}>
    Click me
  </button>

  <h1>Total: {total}</h1>
  <button onClick={handleClick2}>
    Click me
  </button> */}
  {loading ? (
    <div>Loading...</div>
  ):(
    <div>
      <h1>{data.title}</h1>
    </div>
  )}
  </div>
  )
}

export default App
