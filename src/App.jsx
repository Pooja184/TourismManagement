import React from 'react'
import Hero from './components/Hero'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Destinations from './pages/Destinations'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/destinations' element={<Destinations/>}/>
   </Routes>
   <Footer/>
    </div>
  )
}

export default App

