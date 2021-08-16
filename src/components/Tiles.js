import React,{useState} from 'react'
import '../styles/tiles.css'
import LanguageIcon from '@material-ui/icons/Language';

// import icon1 from '../assets/i1.svg'
import icon2 from '../assets/ii2.svg'
import icon3 from '../assets/ii3.svg'
import icon4 from '../assets/ii4.svg'
import iicon1 from '../assets/ii1.svg'

function Tiles() {
   
    return (
        <div className="tiles-wrap">
            
            <div className="tile" >
           
           <div className="icon">

           {/* <LanguageIcon className="tile-icon" /> */}
           <img src={icon4} alt="alt" className="tile-icon-style"/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile" >
            <div className="icon">
          
                 <img src={iicon1} alt="alt" className="tile-icon-style"/>
          
           </div>
           <div className="text">
           3 DECADES OF EXPERTISE
           </div>

            </div>
            <div className="tile">
            <div className="icon">
          
           <img src={icon2} alt="alt" className="tile-icon-style"/>
           </div>
           <div className="text">
           A PROVEN PROCESS
           </div>

            </div>
            <div className="tile" >
            <div className="icon">
            <img src={icon3} alt="alt" className="tile-icon-style"/>
           
           </div>
           <div className="text">
           WHAT DOES HALAL MEAN?

           </div>

            </div>
        </div>
       
    )
}

export default Tiles
