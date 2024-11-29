import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './Pages/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './Pages/Service_/Services'
import Welcome from './Pages/Welcome'
import Destinations from './Pages/Destinations/Destinations'
import Benefits from './components/Benefits/Benefits'
import AboutLanding from './Pages/LandingAbout/About'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
      <AboutLanding />
      <Services />
      <Benefits />
      <Destinations />
      <Footer />
      {/* <Welcome /> */}
    </>
  )
}

export default App
