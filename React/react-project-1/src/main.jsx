import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from '../component/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <Navbar />
)
