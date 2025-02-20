import React, { useRef } from 'react'
import './Test.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Test = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () =>{
    if(tx > -50 ){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }
  
  const slideBackward = () =>{
    if(tx < 0 ){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className="test">
      <img src={next_icon} alt=""  className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li><div className="slide">
            <div className="user_info">
              <img src={user_1} alt="" />
              <div>
                <h3>Jane Doe</h3>
                <span>Edusity, USA</span>
              </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity eas one 
                of the best decisions I've ever made. The supportive
                community, state-of-the-art facilities, and commitment
                to academic excellence have truely exceeded my expectations.
              </p>
              </div>
              </li>
              <li><div className="slide">
            <div className="user_info">
              <img src={user_2} alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity, USA</span>
              </div>
              </div>
              <p>
              The university's curriculum and teaching 
              methods are top-notch, providing a perfect 
              blend of theory and practical experience.
              </p>
              </div>
              </li>
              <li><div className="slide">
            <div className="user_info">
              <img src={user_3} alt="" />
              <div>
                <h3>Emily Johnson</h3>
                <span>Edusity, USA</span>
              </div>
              </div>
              <p>
              The diverse range of programs and the 
              personalized mentorship have prepared me 
              well for my career.
              </p>
              </div>
              </li>
              <li><div className="slide">
            <div className="user_info">
              <img src={user_4} alt="" />
              <div>
                <h3>John Smith</h3>
                <span>Edusity, USA</span>
              </div>
              </div>
              <p>
              I am grateful for the networking opportunities 
              and the professional growth I have experienced
               here.
              </p>
              </div>
              </li>
        </ul>
      </div>
    </div>
  )
}

export default Test
