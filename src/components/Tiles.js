import React,{useState} from 'react'
import '../styles/tiles.css'
import LanguageIcon from '@material-ui/icons/Language';

function Tiles() {
    const [color, setColor] = useState("#00ba51")
    return (
        <div className="tiles-wrap">
            <div className="tile" onMouseEnter={()=>{setColor("white")}} onMouseLeave={()=>{setColor("#00ba51")}}>
           
           <div className="icon">
           <LanguageIcon className="tile-icon" style={{color:color}}/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile" >
            <div className="icon">
           <LanguageIcon className="tile-icon"/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile">
            <div className="icon">
           <LanguageIcon className="tile-icon"/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile">
            <div className="icon">
           <LanguageIcon className="tile-icon"/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
        </div>
    )
}

export default Tiles
