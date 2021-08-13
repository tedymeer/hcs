import React from 'react'
import Sidenav from '../components/Sidenav'
import Sidenavbig from '../components/Sidenavbig'
import Slider from '../components/Slider'
import Tiles from '../components/Tiles'
import SectionT from '../components/SectionT'
import '../styles/home.css'

function Homepage() {
    return (
        <div className="home-wrap">

        <div className="nav-parent-small" >
        <Sidenav/>
        </div>
        <div className="nav-parent-big">
        <Sidenavbig/>
        </div>
        <div>
        <Slider/>
        </div>
        
        <Tiles/>
      

        <SectionT/>
        </div>
    )
}

export default Homepage
