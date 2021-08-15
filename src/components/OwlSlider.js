import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/owl.css'

import pic1 from '../assets/rec-11.jpg'
import pic2 from '../assets/rec-22.jpg'
import pic3 from '../assets/rec-33.jpg'
import pic4 from '../assets/rec-44.jpg'
import pic5 from '../assets/rec-55.png'
import pic6 from '../assets/rec-66.jpg'
import CurrentItemOwl from './CurrentItemOwl';

const responsive = {
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
}
function OwlSlider() {

    return (
        <div className="owl-slider-wrap">
        <OwlCarousel 
        className='owl-theme owl-slider-style' 
        loop={true} 
        margin={10} 
        autoplay={true} 
        autoplayTimeout={2000} 
        autoplaySpeed={2000}
        autoplayHoverPause={true}
        items={5}
        center={true}
        dots={false}
        responsive={responsive}
        >

        <img src={pic1} alt="pic1" className="owl-pic" key={1} id={1}/>
        <img src={pic2} alt="pic1" className="owl-pic" key={2} id={2}/>
        <img src={pic3} alt="pic1" className="owl-pic" key={3} id={3}/>
        <img src={pic4} alt="pic1" className="owl-pic" key={4} id={4}/>
        <img src={pic5} alt="pic1" className="owl-pic" key={5} id={5}/>
        <img src={pic6} alt="pic1" className="owl-pic" key={6} id={6}/>
     
        </OwlCarousel>


        </div>
    )
}

export default OwlSlider
