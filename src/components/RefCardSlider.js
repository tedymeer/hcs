import React from 'react'
import Slider from "react-slick";

import RefCard from './RefCard';

import pic1 from '../assets/ref1.png'
import pic2 from '../assets/ref2.png'
import pic3 from '../assets/ref3.png'

import pic4 from '../assets/ref4.png'
import pic5 from '../assets/ref5.png'
import pic6 from '../assets/ref6.png'

import pic7 from '../assets/ref7.png'
import pic8 from '../assets/ref8.png'
import pic9 from '../assets/ref9.png'

import pic10 from '../assets/ref10.gif'
import pic11 from '../assets/ref11.png'
import pic12 from '../assets/ref12.png'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../styles/refcardslider.css'

class CardSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      loop:true,
      speed: 2000,
      slidesToShow: 7,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows:true,
      autoplay:true,
      pauseOnHover:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="ref-slider-wrap">
        <Slider {...settings} >


        <RefCard photo={pic1}/>
        <RefCard photo={pic2}/>
        <RefCard photo={pic3}/>
        <RefCard photo={pic4}/>
        <RefCard photo={pic5}/>
        <RefCard photo={pic6}/>
        <RefCard photo={pic7}/>
        <RefCard photo={pic8}/>
        <RefCard photo={pic9}/>
        <RefCard photo={pic10}/>
        <RefCard photo={pic11}/>
        <RefCard photo={pic12}/>

        </Slider>
      </div>
    );
  }
}


export default CardSlider;