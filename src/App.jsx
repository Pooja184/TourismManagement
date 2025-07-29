import React from 'react'
import Hero from './components/Hero'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Destinations from './pages/Destinations'
import Footer from './components/Footer'
import Beaches from './pages/Beaches'
import Trekking from './pages/Trekking'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/destinations' element={<Destinations/>}/>
    <Route path='/destinations' element={<Destinations/>}/>
    <Route path='/beaches' element={<Beaches/>}/>
    <Route path='/trekking' element={<Trekking/>}/>

   </Routes>
   <Footer/>
    </div>
  )
}

export default App

