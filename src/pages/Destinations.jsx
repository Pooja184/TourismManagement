import React from 'react'
import HeroComponent from '../components/HeroComponent'
import img1 from "../images/topDestinations/topDestinationsHero.jpg";


const Destinations = () => {
  return (
    <div>
      <HeroComponent heading={"Must-Visit Spots in Ratnagiri"} description={"Explore Ratnagiri’s stunning beaches, historic forts, and peaceful temples — all in one unforgettable journey"} backgroundImage={img1}/>
    </div>
  )
}

export default Destinations
