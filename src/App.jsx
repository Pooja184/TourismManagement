import React from 'react'
import Hero from './components/Hero'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Destinations from './pages/Destinations'
import Footer from './components/Footer'
import Beaches from './pages/Beaches'
import Trekking from './pages/Trekking'
import Temples from './pages/Temples'
import Waterfalls from './pages/Waterfalls'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/destinations' element={<Destinations/>}/>
    <Route path='/destinations' element={<Destinations/>}/>
    <Route path='/beaches' element={<Beaches/>}/>
    <Route path='/trekking' element={<Trekking/>}/>
    <Route path='/temples' element={<Temples/>}/>
    <Route path='/waterfalls' element={<Waterfalls/>}/>

   </Routes>
   <Footer/>
    </div>
  )
}

export default App

