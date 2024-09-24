import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import Mock from './components/Mock';

const router = createBrowserRouter(
  [
    {
      path: "*",
      element:
      <div>
        <NavBar />
      </div>
       
    },
    {
      path:"/",
      element:
      <div>
      <NavBar/>
      <Home/>
      </div>

    },
    {
      path:"/about",
      element:
      <div>
      <NavBar/>
      <About />
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
      <NavBar/>
      <Dashboard/>
      </div>,

      children: 
      [
        {
          path:"Courses",
          element:
          <div>
          <Courses />
          </div>
        },

        {
          path:"Mock",
          element:
          <div>
          <Mock />
          </div>
        }
      ]


    },
    {
      path:"/student/:id",
      element:
      <div>
      <NavBar/>
      <ParamComp/>
      </div>
    }

  ]
)

function App() {

  return (
    <div>
        <RouterProvider router={router} />
        
    </div>
  )
}

export default App
