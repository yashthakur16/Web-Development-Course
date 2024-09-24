import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/" className={({isActive})=> isActive ? "active-link" :""}>Home</NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({isActive})=> isActive ? "active-link" :""}>About</NavLink>
        </li>
        <li>
        <NavLink to="/dashboard" className={({isActive})=> isActive ? "active-link" :"nope"}>Dashboard</NavLink>
        </li>
        <li>
        <NavLink to="/student/:id" className={({isActive})=> isActive ? "active-link" :"nope"}>Params</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
