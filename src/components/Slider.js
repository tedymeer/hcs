import React from 'react'
import {Carousel} from 'react-bootstrap'
import cover1 from '../assets/backcover1.jpg'
import cover2 from '../assets/backcover2.jpg'
import cover3 from '../assets/backcover3.jpg'
import cover4 from '../assets/backcover4.jpg'

import '../styles/slider.css'
function Slider() {
    return (
        <div className="slider-wrap">

        <Carousel fade>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={cover1}
      alt="First slide"
    />
    <div class="carousel-content">
  
    <section class="animation-box">
    <div class="first-text">
       <div>Halal Certification Services</div> 
       <div className="caption">Halal certificates for food, Cosmetics and Pharmaceuticals products</div> 
    
    </div>
    
    </section>

    </div>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={cover2}
      alt="First slide"
    />
    <div class="carousel-content">
  
    <section class="animation-box">
    <div class="first-text">
       <div>Halal Certification Services</div> 
       <div className="caption">Halal certificates for food, Cosmetics and Pharmaceuticals products</div> 
    
    </div>
    
    </section>

    </div>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={cover3}
      alt="First slide"
    />
    <div class="carousel-content">
  
    <section class="animation-box">
    <div class="first-text">
       <div>Halal Certification Services</div> 
       <div className="caption">Halal certificates for food, Cosmetics and Pharmaceuticals products</div> 
    
    </div>
    
    </section>

    </div>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={cover4}
      alt="First slide"
    />
    <div class="carousel-content">
  
    <section class="animation-box">
    <div class="first-text">
       <div>Halal Certification Services</div> 
       <div className="caption">Halal certificates for food, Cosmetics and Pharmaceuticals products</div> 
    
    </div>
    
    </section>

    </div>
  </Carousel.Item>
 
    </Carousel>
</div>
    )
}

export default Slider
