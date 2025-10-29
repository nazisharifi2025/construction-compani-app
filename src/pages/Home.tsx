import Hero from '../MyComponents/Hero'
import AboutUs from '../MyComponents/AboutUs'
import Testimonials from '../MyComponents/Testimonials'
import Prouduct from '../MyComponents/Prouduct'
import Footer from '../MyComponents/Footer'
import Spinn from '../Articals/Spinn'

function Home() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Testimonials/>
      <Prouduct/> 
      <Footer/>
      <Spinn />
    </div>
  )
}

export default Home