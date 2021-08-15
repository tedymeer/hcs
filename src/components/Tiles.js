import React,{useState} from 'react'
import '../styles/tiles.css'
import LanguageIcon from '@material-ui/icons/Language';
import icon1 from '../assets/1.png'
function Tiles() {
   
    return (
        <div className="tiles-wrap">
            
            <div className="tile" >
           
           <div className="icon">
           <LanguageIcon className="tile-icon" />
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile" >
            <div className="icon">
                 {/* <img src={icon1} style={{width:'90px',height:'90px'}}/> */}
           <LanguageIcon className="tile-icon" />
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile">
            <div className="icon">
           <LanguageIcon className="tile-icon" />
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile" >
            <div className="icon">
           <LanguageIcon className="tile-icon" className="tile-icon" />
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
        </div>
       
    )
}

export default Tiles
