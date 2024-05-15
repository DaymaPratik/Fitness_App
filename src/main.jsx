import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import MainSection from './Components/MainSection/MainSection'

import './index.css'
import About from './Components/AboutUs/About'
import Exercise from './Components/Exercise/Exercise'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Navbar/>
     <MainSection/>
     <About/>
     <Exercise/>
  </React.StrictMode>,
)
