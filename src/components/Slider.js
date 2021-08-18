import React from 'react'
import {Carousel} from 'react-bootstrap'
import cover2 from '../assets/bc10.jpg'
import cover3 from '../assets/bc11.jpg'
// import cover4 from '../assets/bc12.jpg'
// import cover5 from '../assets/bc13.jpg'
import cover6 from '../assets/bc14.jpg'
import cover7 from '../assets/bc17.jpg'
// import cover7 from '../assets/bc15.png'
// import cover8 from '../assets/bc16.jpg'

import '../styles/slider.css'
function Slider() {
    return (
        <div className="slider-wrap" >
  <div class="carousel-content">
  
  <section class="animation-box">
  <div class="first-text">
     <div><span className="colored-letter">H</span>alal <span className="colored-letter">C</span>ertification <span className="colored-letter">S</span>ervices</div> 
     <div className="caption">Halal certificates for food, Cosmetics and Pharmaceuticals products</div> 
  
  </div>
  
  </section>

  </div>
        <Carousel fade>

  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100 cimg"
      src={cover2}
      alt="First slide"
    />
   
  </Carousel.Item>

  <Carousel.Item interval={2500} >
    <img
      className="d-block w-100 cimg"
      src={cover7}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100 cimg"
      src={cover3}
      alt="First slide"
    />
   
  </Carousel.Item>
 


    </Carousel>
</div>
    )
}

export default Slider
