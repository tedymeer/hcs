import React,{useState} from 'react'
import '../styles/tiles.css'
import LanguageIcon from '@material-ui/icons/Language';

function Tiles() {
    const [color1, setColor1] = useState("#00ba51")
    const [color2, setColor2] = useState("#00ba51")
    const [color3, setColor3] = useState("#00ba51")
    const [color4, setColor4] = useState("#00ba51")
    return (
        <div className="tiles-wrap">
            
            <div className="tile" onMouseEnter={()=>{setColor1("white")}} onMouseLeave={()=>{setColor1("#00ba51")}}>
           
           <div className="icon">
           <LanguageIcon className="tile-icon" style={{color:color1}}/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile" onMouseEnter={()=>{setColor2("white")}} onMouseLeave={()=>{setColor2("#00ba51")}}>
            <div className="icon">
           <LanguageIcon className="tile-icon" style={{color:color2}}/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile" onMouseEnter={()=>{setColor3("white")}} onMouseLeave={()=>{setColor3("#00ba51")}}>
            <div className="icon">
           <LanguageIcon className="tile-icon" style={{color:color3}}/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
            <div className="tile" onMouseEnter={()=>{setColor4("white")}} onMouseLeave={()=>{setColor4("#00ba51")}}>
            <div className="icon">
           <LanguageIcon className="tile-icon" className="tile-icon" style={{color:color4}}/>
           </div>
           <div className="text">
                A GLOBAL RECOGNITION
           </div>

            </div>
        </div>
       
    )
}

export default Tiles
