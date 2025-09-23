import { BrowserRouter, Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Serveces from "./pages/Serveces"
import Blog from "./pages/Blog"
import Contuct from "./pages/Contuct"
import Wether from "./pages/Wether"
import Navbar from "./MyComponents/Navbar"
function App() {
  return (
    <div className="h-screen w-full font-enter">
      <Navbar/>
      <div className="w-full h-full mx-auto">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Serveces" element={<Serveces/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contuct" element={<Contuct/>}/>
          <Route path="/Wether" element={<Wether/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
   
  )
}

export default App
