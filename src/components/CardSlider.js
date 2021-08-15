import React from 'react'
import Slider from "react-slick";
import NewsCard from './NewsCard';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import '../styles/_slick.scss'
// import '../styles/_slickTheme.scss'

import '../styles/cardslider.css'

import news1 from '../assets/news1.jpg'

class CardSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      loop:true,
      speed: 2000,
      slidesToShow: 3,
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
      <div>
        <Slider {...settings} >
           
            <NewsCard photo={news1}/>
            <NewsCard photo={news1}/>
            <NewsCard photo={news1}/>
          
            <NewsCard photo={news1}/>
            <NewsCard photo={news1}/>
            <NewsCard photo={news1}/>
          
            <NewsCard photo={news1}/>
            <NewsCard photo={news1}/>
            <NewsCard photo={news1}/>
         

        </Slider>
      </div>
    );
  }
}


export default CardSlider;