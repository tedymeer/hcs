import React from 'react'
import {Carousel} from 'react-bootstrap'
import cover2 from '../assets/bc3.jpg'
import cover3 from '../assets/bc5.jpg'
import cover4 from '../assets/bc4.jpg'

import '../styles/slider.css'
function Slider() {
    return (
        <div className="slider-wrap">
  <div class="carousel-content">
  
  <section class="animation-box">
  <div class="first-text">
     <div><span className="colored-letter">H</span>alal <span className="colored-letter">C</span>ertification <span className="colored-letter">S</span>ervices</div> 
     <div className="caption">Halal certificates for food, Cosmetics and Pharmaceuticals products</div> 
  
  </div>
  
  </section>

  </div>
        <Carousel slide>

  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={cover2}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={cover3}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={cover4}
      alt="Third slide"
    />
   
  </Carousel.Item>
 
    </Carousel>
</div>
    )
}

export default Slider
