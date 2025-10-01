import React from 'react'
import Hero from '../MyComponents/Hero'
import AboutUs from '../MyComponents/AboutUs'
import Testimonials from '../MyComponents/Testimonials'
import Prouduct from '../MyComponents/Prouduct'
import Footer from '../MyComponents/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Testimonials/>
      <Prouduct/> 
      <Footer/>
    </div>
  )
}

export default Home