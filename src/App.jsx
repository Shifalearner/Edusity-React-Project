import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbaar from './Components/Navbaar/Navbaar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Test'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

const App = () => {
   
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
    <Routes>
      <Route path="/" element={
    <div>
      <Navbaar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Students Says...'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
      } />
      <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    
  )
}

export default App
