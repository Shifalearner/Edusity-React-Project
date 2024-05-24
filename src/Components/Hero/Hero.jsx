import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {


  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/signup');
  };


  return (
    <div className="hero container">
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower
                students with the knowledge, skills, and experiences
                 needed to excel in the dynamic feild of education.
            </p>
            <button className="btn"  onClick={handleExploreMore}>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
