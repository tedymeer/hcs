import React from 'react'
import '../styles/newscard.css'
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
function NewsCard(props) {
    return (
      
       
        <div className="news-card float-on-hover ">
            <div className="photo">
                <img src={props.photo} alt="photo" className="news-pic-style"/>
            </div>
            <div className="news-content">
            <div className="dt-parent">
            <div className="date-time">
            <EventIcon/> April -17 - 2021
            </div>
            </div>
            <div className="news-headline">
            This is a Great event
            </div>
            <div className="news-para">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
            </div>
            <div className="location">
            <LocationOnIcon className="loc-icon"/> Halle 19, C 02
            </div>
            </div>
          </div>
         
    )
}

export default NewsCard
